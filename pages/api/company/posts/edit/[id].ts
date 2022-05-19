import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";
import { newJobOfferAdapter } from "utils/newJobOfferAdapter";

connectDB();

type Body = {
  description:string;
  employmentType:string;
  isRemote:string;
  jobTitle:string;
  location:string;
  mainTech:string;
  maxSalary:string;
  minSalary:string;
  seniority:string;
  techSkills:Array<{type:string; value: number; label: string;}>
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const {
    query: { id },
  } = req;
  if (session) {
    //@ts-ignore
    
    const {
      description,
      employmentType,
      isRemote,
      jobTitle,
      location,
      mainTech,
      maxSalary,
      minSalary,
      seniority,
      techSkills
    } = req.body as Body;
    const formattedBodyData = newJobOfferAdapter({
      description,
      employmentType,
      isRemote,
      jobTitle,
      location,
      mainTech,
      maxSalary,
      minSalary,
      seniority,
      techSkills
    });
    
    const jobOffer = await JobOffer.findOneAndUpdate(
      {_id: id},
      {
        ...formattedBodyData
      }
    );
    res.status(200).json({
      message: `Succesully updated job offer`,
      jobOffer,
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
