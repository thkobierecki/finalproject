import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { connectDB } from "lib/mongo/connectDB";
import JobApplication from "lib/mongo/models/JobApplication";
connectDB();


export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const { 
    method,
    query: { id }, } = req;
  
  if (session) {
    switch (method) {
      case "DELETE":
        await JobApplication.findOneAndDelete({ _id: id},(err:any)=>{
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
