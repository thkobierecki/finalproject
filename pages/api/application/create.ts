import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobApplication from "lib/mongo/models/JobApplication";
import { connectDB } from "lib/mongo/connectDB";
import JobOffer from "lib/mongo/models/JobOffer";
import UserProfile from "lib/mongo/models/UserProfile";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    try{
        //@ts-ignore
        const userId = session.user.id;
        const {
          companyId,
          offerId
        } = req.body;

        const userProfile = await UserProfile.findOne({
          //@ts-ignore
          userId,
        });

        const jobApplication = await JobApplication.create({
        company: companyId,
        jobSeeker : userProfile._id,
        jobOffer: offerId,
        status: "PENDING",
        });
        const updatedJobOffer = await JobOffer.findOneAndUpdate({_id: offerId},{ $inc: { numberOfApplications: 1 } }, {new: true});
        console.log(updatedJobOffer);
        res.status(200).json({
          message: `Succesully created job apllication`,
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
