import DevProfilePage from "components/pages/dev/panel/profile";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Profile: NextPage = () => {
  return <DevProfilePage />;
};

export default Profile;

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });
  console.log(session);
  if (!session) {
    return {
      redirect: { destination: "/signin" },
    };
  }

  return {
    props: {},
  };
}
