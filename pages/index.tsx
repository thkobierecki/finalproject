import LandingPage from "components/pages/landing";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Home: NextPage = () => {
  return <LandingPage />;
};

export default Home;

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });

  //@ts-ignore
  if (session?.user?.accountType === "COMPANY") {
    return {
      redirect: { destination: "/company/panel/profile" },
    };
  }
  //@ts-ignore
  if (session?.user?.accountType === "DEVELOPER") {
    return {
      redirect: { destination: "/dev/panel/profile" },
    };
  }

  return {
    props: {},
  };
}
