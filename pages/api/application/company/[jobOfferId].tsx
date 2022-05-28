import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobApplication from "lib/mongo/models/JobApplication";
import { connectDB } from "lib/mongo/connectDB";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const { 
    method,
    query: { jobOfferId },
    body 
  } = req;
  
  
  if (session) {
    switch (method) {
      case "GET":
        //@ts-ignore
        const jobApplications = await JobApplication.find({
          //@ts-ignore
          jobOffer: jobOfferId,
        })
        .populate("jobOffer")
        .populate("jobSeeker");
      
        if (jobApplications) {
          res.status(200).json(jobApplications);
        } else {
          res.status(404).json({ error: "Not found" });
        };
        break;
      case "PUT":
        
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;

    }
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
