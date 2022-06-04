import MatchedCandidatesPage from "components/pages/company/panel/matched-candidates";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const MatchedCandidates: NextPage = () => {
  return <MatchedCandidatesPage />;
};

export default MatchedCandidates;

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
