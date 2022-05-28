import ApplicationsPage from "components/pages/dev/panel/applications";
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
  if (session?.user?.accountType === "COMPANY") {
    return {
      redirect: { destination: "/company/panel/profile" },
    };
  }

  return {
    props: {},
  };
}
