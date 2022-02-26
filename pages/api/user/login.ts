import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "lib/mongo/connectDB";
import User from "lib/mongo/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

type Response = {
  message: string;
  email: string;
  id: string;
  token: string;
};
type ErrorType = { error: string };

connectDB();

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Response | ErrorType>
) => {
  const { email, password } = req.body;
  try {
    if (req.method === "POST") {
      if (!email || !password) {
        return res.status(422).json({ error: "please fill all the fields" });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ error: "user dont exists with that email" });
      }
      const doMatch = await bcrypt.compare(password, user.password);
      if (doMatch) {
        //@ts-ignore
        const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
          expiresIn: "7d",
        });

        const { email, _id } = user;

        res.status(201).json({
          token,
          email,
          id: _id,
          message: "login successful",
        });
      }
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};
