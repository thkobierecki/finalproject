import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import JobApplication from "lib/mongo/models/JobApplication";
import { connectDB } from "lib/mongo/connectDB";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });
  const { 
    method,
    query: { id },
    body 
  } = req;
  
  
  if (session) {
    switch (method) {
      case "PUT":
        await JobApplication.findOneAndUpdate({ _id: id},{ status: body?.status })
        res.status(200).end('Sucesfully updated');
        break;
      default:
        res.setHeader("Allow", ["PUT"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;

    }
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
