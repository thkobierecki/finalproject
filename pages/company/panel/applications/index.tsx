import ApplicationsPage from "components/pages/company/panel/applications";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Applications: NextPage = () => {
  return <ApplicationsPage />;
};

export default Applications;

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: { destination: "/signin" },
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
