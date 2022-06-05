import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";
import JobApplication from "lib/mongo/models/JobApplication";


connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const {
    query: { id },
  } = req;
  if (session) {
    const applications = await JobApplication.find({jobOffer: id}).populate("jobSeeker");
    //@ts-ignore
    const hasAppliation = applications.find(app=>app.jobSeeker.userId === session.user.id);
    //@ts-ignore
    const jobOffer = await JobOffer.findOne({ _id: id}).sort({ createdAt: -1 }).populate("company");
    res.status(200).json({
      jobOffer: { 
        ...jobOffer._doc,
        hasApplication : hasAppliation ? true : false
      }
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
