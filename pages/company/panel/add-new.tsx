import AddNewOfferPage from "components/pages/company/panel/add-new";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Profile: NextPage = () => {
  return <AddNewOfferPage />;
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
  if (session?.user?.accountType === "DEVELOPER") {
    return {
      redirect: { destination: "/dev/panel/profile" },
    };
  }

  return {
    props: {},
  };
}
