import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "lib/mongo/connectDB";
import User from "lib/mongo/models/User";
import bcrypt from "bcryptjs";

type UserType = {
  email: string;
};
type Response = {
  message: string;
  user: UserType;
};
type ErrorType = { error: string };

connectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Response | ErrorType>
) => {
  try {
    if (req.method === "POST") {
      const { email, password, accountType } = req.body;
      console.log("accountType:", accountType);
      const user = await User.findOne({ email: email });

      if (user) {
        return res.status(422).json({ error: "User already exists" });
      }

      const HashedPassword = await bcrypt.hash(password, 12);
      const newUser = await new User({
        email: email,
        password: HashedPassword,
        accountType: accountType,
      }).save();
      res
        .status(200)
        .json({
          message: "Sign Up Sucess",
          user: { email: newUser.email, accountType: newUser.accountType },
        });
    }
  } catch (error) {
    console.log("Im error");
    console.log(error);
  }
};
