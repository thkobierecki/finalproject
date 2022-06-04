import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobApplication from "lib/mongo/models/JobApplication";
import { connectDB } from "lib/mongo/connectDB";
import JobOffer from "lib/mongo/models/JobOffer";
import Company from "lib/mongo/models/Company";
import UserProfile from "lib/mongo/models/UserProfile";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    try{
        //@ts-ignore
        const userId = session.user.id;
        const company = await Company.findOne({userId})
        const {
          jobSeeker,
          offerId
        } = req.body;

        const userProfile = await UserProfile.findOne({
          userId: jobSeeker,
        });

        const jobApplication = await JobApplication.create({
          company: company._id,
          jobSeeker : userProfile._id,
          jobOffer: offerId,
          status: "PENDING",
        });
        await JobOffer.findOneAndUpdate({_id: offerId},{ $inc: { numberOfApplications: 1 } }, {new: true});
        res.status(200).json({
          message: `Succesully invited for interview`,
          jobApplication
        });
    }catch(err){
      res.status(400);
    }
    
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
