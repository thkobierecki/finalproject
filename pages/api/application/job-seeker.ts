import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobApplication from "lib/mongo/models/JobApplication";
import { connectDB } from "lib/mongo/connectDB";
import UserProfile from "lib/mongo/models/UserProfile";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    //@ts-ignore
    const userId = session.user.id;

    const userProfile = await UserProfile.findOne({
      //@ts-ignore
      userId,
    });
    
    const jobApplications = await JobApplication.find({
      //@ts-ignore
      jobSeeker: userProfile._id,
    })
    .populate("company")
    .populate("jobOffer")
    .populate("jobSeeker");
    if (jobApplications) {
      res.status(200).json(jobApplications);
    } else {
      res.status(404).json({ error: "Not found" });
    }
      
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
