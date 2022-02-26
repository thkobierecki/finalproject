import SignIn from "components/pages/auth/signin";
import { getProviders, getSession } from "next-auth/react";

const Register = ({ providers }: { providers: any }) => {
  return (
    <>
      <SignIn providers={providers} />
    </>
  );
};

export default Register;

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(),
    },
  };
}
