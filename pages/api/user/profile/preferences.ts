import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import UserPreferences from "lib/mongo/models/UserPreferences";
import { connectDB } from "lib/mongo/connectDB";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  const { method } = req;
  if (session) {
    // @ts-ignore
    const userId = session.user.id;
    switch (method) {
      case "GET":
        const userPreferences = await UserPreferences.findOne({
          userId,
        });
        if (userPreferences) {
          res.status(200).json(userPreferences);
        } else {
          res.status(404);
        }

        break;
      case "POST":
        const {
          searchStatus,
          isRemote,
          seniority,
          employmentType,
          location,
          companyStage,
          companyType,
          industryType,
          mainTech,
          techSkills,
          minSalary,
          maxSalary,
        } = req.body;
        //@ts-ignore
        const hasProfile = await UserPreferences.findOne({
          userId,
        });
        if (hasProfile) {
          const updatedProfile = await UserPreferences.findOneAndUpdate(
            { userId },
            {
              searchStatus,
              isRemote,
              seniority,
              employmentType,
              location,
              companyStage,
              companyType,
              industryType,
              mainTech,
              techSkills,
              minSalary,
              maxSalary,
            }
          );
          res.status(201).json({
            message: `Succesully updated profile`,
            userPreferences: updatedProfile,
          });
        } else {
          const createdProfile = await UserPreferences.create({
            searchStatus,
            isRemote,
            seniority,
            employmentType,
            location,
            companyStage,
            companyType,
            industryType,
            mainTech,
            techSkills,
            minSalary,
            maxSalary,
            userId,
          });
          res.status(200).json({
            message: `Succesully created profile`,
            userPreferences: createdProfile,
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
