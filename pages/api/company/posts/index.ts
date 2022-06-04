import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";
import UserPreferences from "lib/mongo/models/UserPreferences";
import { matchJobOfferToUser } from "utils/matching/userMatch";


connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    const users = await UserPreferences.find();
    //@ts-ignore
    const jobOffers = await JobOffer.find({companyId: session.user.id}).sort({ createdAt: -1 }).populate("company");

    const matched = jobOffers.map(jobOffer => {
      let totalMatches = 0;
      const matchesIds = [] as string[];
      users.forEach(user=>{
        const matchSum = matchJobOfferToUser(user, jobOffer);
        if(parseInt(matchSum) > 30) {
          totalMatches = totalMatches + 1;
          matchesIds.push(user.userId)
        }
      })

      return {
        ...jobOffer._doc,
        totalMatches,
        matchesIds
      }
    })

    res.status(200).json({
      jobOffers: matched,
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
