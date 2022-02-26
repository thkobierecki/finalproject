import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
//@ts-ignore
import ClientPromise from "lib/mongo/mongodb";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  secret: process.env.SECRET,
  // @ts-ignore
  adapter: MongoDBAdapter(ClientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@mail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3000/api/user/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        console.log(user);
        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log(user);
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.SECRET,
  },

  callbacks: {
    signIn: async ({ user }) => {
      return true;
    },
    jwt: async ({ token, account, user }) => {
      if (user) token.user = user;
      return token;
    },

    session: async ({ session, token, user }) => {
      if (token.user) {
        session.user = token.user;
      }
      if (session.user?.email == "th.kobierecki@gmail.com") {
        session.user.isAdmin = true;
      } else {
        session.user.isAdmin = false;
      }
      return session;
    },
  },
  // pages: {
  //   signIn: "/signin",
  // },
});
