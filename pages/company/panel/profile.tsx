import CompanyProfilePage from "components/pages/company/panel/profile";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Profile: NextPage = () => {
  return <CompanyProfilePage />;
};

export default Profile;

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });
  console.log('session',session);
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
