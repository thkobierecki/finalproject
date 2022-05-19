import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";


connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    //@ts-ignore
    const jobOffers = await JobOffer.find().sort({ createdAt: -1 }).populate("company");

    res.status(200).json({
      jobOffers
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
