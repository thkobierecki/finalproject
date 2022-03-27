import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import UserProfile from "lib/mongo/models/UserProfile";
import { connectDB } from "lib/mongo/connectDB";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  const { method } = req;
  if (session) {
    //@ts-ignore
    const userId = session.user.id;
    console.log(userId);
    switch (method) {
      case "GET":
        const userProfile = await UserProfile.findOne({
          //@ts-ignore
          userId,
        });
        if (userProfile) {
          res.status(200).json(userProfile);
        } else {
          res.status(404).json({ error: "User not found" });
        }

        break;
      case "POST":
        const {
          firstName,
          lastName,
          city,
          introduction,
          linkedin,
          github,
          cvLink,
        } = req.body;
        //@ts-ignore
        const hasProfile = await UserProfile.findOne({
          userId,
        });
        if (hasProfile) {
          const updatedProfile = await UserProfile.findOneAndUpdate(
            { userId },
            {
              firstName,
              lastName,
              city,
              introduction,
              linkedin,
              github,
              cvLink,
            }
          );
          res.status(201).json({
            message: `Succesully updated profile`,
            userProfile: updatedProfile,
          });
        } else {
          const createdProfile = await UserProfile.create({
            firstName,
            lastName,
            email: session.user?.email,
            city,
            introduction,
            linkedin,
            github,
            cvLink,
            userId,
          });
          res.status(200).json({
            message: `Succesully created profile`,
            userProfile: createdProfile,
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
