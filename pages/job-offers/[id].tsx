import JobOfferPage from "components/pages/job-offer";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";


const Profile: NextPage = () => {
  return <JobOfferPage />;
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

  return {
    props: {},
  };
}