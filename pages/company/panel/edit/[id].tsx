import EditOffer from "components/pages/company/panel/edit-job-offer";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return <EditOffer id={id as string} />;
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
