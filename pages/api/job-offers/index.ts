import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import UserPreferences from "lib/mongo/models/UserPreferences";
import { connectDB } from "lib/mongo/connectDB";
import { matchJobOfferToUser } from "utils/matching/userMatch";


connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    //@ts-ignore
    const userId = session.user.id;

    const userPreferences = await UserPreferences.findOne({
      userId,
    });
    const jobOffers = await JobOffer.find().sort({ createdAt: -1 }).populate("company");

    const matchUserJobs = jobOffers.map(jobOffer => {
      const matchingPercentage = matchJobOfferToUser(userPreferences, jobOffer);

      return {
        ...jobOffer._doc,
        match: Number.parseFloat(matchingPercentage)

      }
    })
    const filteredJobOffers =matchUserJobs.filter(match => match.match > 10);

    res.status(200).json({
      jobOffers: filteredJobOffers
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
