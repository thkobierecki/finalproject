import PreferencesPage from "components/pages/dev/panel/preferences";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Profile: NextPage = () => {
  return <PreferencesPage />;
};

export default Profile;

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
