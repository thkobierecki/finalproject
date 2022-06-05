import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Company from "lib/mongo/models/Company";
import { connectDB } from "lib/mongo/connectDB";
import { companyProfileAdapter } from "utils/newJobOfferAdapter";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  const { method } = req;
  if (session) {
    //@ts-ignore
    const userId = session.user.id;
    switch (method) {
      case "GET":
        const company = await Company.findOne({
          //@ts-ignore
          userId,
        });
        if (company) {
          res.status(200).json(company);
        } else {
          res.status(404).json({ error: "Company not found" });
        }

        break;
      case "POST":
        const {
          companyName,
          companyStage,
          companyType,
          companyLocation,
          industryType,
          introduction,
          socials,
          logo
        } = req.body;

        const formattedData = companyProfileAdapter({
          companyName,
          companyStage,
          companyType,
          companyLocation,
          industryType,
          introduction,
          socials,
          logo
        });
        //@ts-ignore
        const hasProfile = await Company.findOne({
          userId,
        });
        if (hasProfile) {
          const updatedProfile = await Company.findOneAndUpdate(
            { userId },
            {
              ...formattedData
            }
          );
          res.status(201).json({
            message: `Succesully updated profile`,
            Company: updatedProfile,
          });
        } else {
          const createdProfile = await Company.create({
            ...formattedData,
            email: session.user?.email,
            userId,
          });
          res.status(200).json({
            message: `Succesully created profile`,
            company: createdProfile,
          });
        }
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
