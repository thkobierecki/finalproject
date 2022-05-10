import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";
import { newJobOfferAdapter } from "utils/newJobOfferAdapter";
import Company from "lib/mongo/models/Company";

connectDB();

type Body = {
  description:string;
  employmentType:string;
  isRemote:string;
  jobTile:string;
  location:string;
  mainTech:string;
  maxSalary:string;
  minSalary:string;
  seniority:string;
  techSkills:Array<{type:string; value: number; label: string;}>
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session) {
    //@ts-ignore
    const userId = session.user.id;
    const {
      description,
      employmentType,
      isRemote,
      jobTile,
      location,
      mainTech,
      maxSalary,
      minSalary,
      seniority,
      techSkills
    } = req.body as Body;
    const formattedBodyData = newJobOfferAdapter({description,
      employmentType,
      isRemote,
      jobTile,
      location,
      mainTech,
      maxSalary,
      minSalary,
      seniority,
      techSkills
    });
    const company = await Company.find({userId});
    
    const jobOffer = await JobOffer.create({
      ...formattedBodyData,
      numberOfApplications: 0,
      applicantsID: [],
      companyId: userId,
      company: company[0]["_id"]
    });
    res.status(200).json({
      message: `Succesully created job offer`,
      jobOffer: jobOffer,
    });
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
