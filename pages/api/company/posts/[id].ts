import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobOffer from "lib/mongo/models/JobOffer";
import { connectDB } from "lib/mongo/connectDB";


connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const { 
    method,
    query: { id }, } = req;
  
  if (session) {
    switch (method) {
      case "GET":
        //@ts-ignore
        const jobOffer = await JobOffer.findOne({ _id: id}).sort({ createdAt: -1 }).populate("company");
        res.status(200).json({
          jobOffer
        });
        break;
      case "DELETE":
        await JobOffer.findOneAndDelete({ _id: id},(err:any)=>{
          if(err) {
            res.status(400).json({
              status: 'Error trying to delete job offer'
            });
          }else{
            res.status(200).json({
              status: 'Removed sucessfully'
            });
          }
        });
        
      break;
    }
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
