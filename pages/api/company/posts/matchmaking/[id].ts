import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";
import UserPreferences from "lib/mongo/models/UserPreferences";
import { matchJobOfferToUser } from "utils/matching/userMatch";
import UserProfile from "lib/mongo/models/UserProfile";
import { profile } from "console";


connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const { 
    query: { id },
  } = req;
  if (session) {
    const users = await UserPreferences.find();
    const userProfiles = await UserProfile.find();
    //@ts-ignore
    const jobOffer = await JobOffer.findOne({ _id: id}).populate("company");

   
    let totalMatches = 0;
    const matchesIds = [] as string[];
    const matchMap: {[key:string]:string} = {};
    users.forEach(user=>{
      const matchSum = matchJobOfferToUser(user, jobOffer);
      if(parseInt(matchSum) > 30) {
        totalMatches = totalMatches + 1;
        matchesIds.push(user.userId)
        matchMap[user.userId] = matchSum;
      }
    })
    const matchedUserProfiles = userProfiles
      .filter(profile => matchesIds.includes(profile.userId))
      .map(profile=>({...profile._doc, match: matchMap[profile._doc.userId]}));

    res.status(200).json({
      jobOffer,
      totalMatches,
      matchedUsers: matchedUserProfiles

    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
