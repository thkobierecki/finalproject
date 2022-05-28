import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobApplication from "lib/mongo/models/JobApplication";
import { connectDB } from "lib/mongo/connectDB";
import Company from "lib/mongo/models/Company";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  
  if (session) {
    //@ts-ignore
    const userId = session.user.id;
    const company = await Company.findOne({userId})
    const jobApplications = await JobApplication.find({
      //@ts-ignore
      company: company._id,
    })
    .populate("jobOffer");

    const countNumberOfApplications: {[id: string]: number} = jobApplications
      .map(jobApplication => jobApplication.jobOffer._id)
      .reduce((accumulator, value) => {
        return {...accumulator, [value]: (accumulator[value] || 0) + 1};
      }, {});
      
    const companyApplications = Object.entries(countNumberOfApplications)
      .map(entry => { 
        return {
          ...jobApplications.find(app =>app.jobOffer._id == entry[0]),
          count: entry[1]
        }
      })
      .map((item:any)=>({count:item.count, ...item._doc}));
  
    if (jobApplications) {
      res.status(200).json(companyApplications);
    } else {
      res.status(404).json({ error: "Not found" });
    }
      
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
