import Button from "components/common/Button";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import router from "next/router";
import { ActionsWrapper } from "./styles";

const Actions = () => {
  const { data } = useSession();
  const userType =
  //@ts-ignore
  data && data.user && data.user.accountType
  return (
    <ActionsWrapper>
      {data ? (
        <>
          {userType === "COMPANY" &&
          <Link href={'/company/panel/job-offers'}>
            <Button variant="link" style={{marginRight: 20}}>
              Post a job offer
            </Button>
          </Link>
            
          }
          <Button variant="primary" onClick={() => signOut()}>
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="default"
            onClick={() => router.push("/api/auth/signin")}
            style={{ marginRight: "10px" }}
          >
            Sign In
          </Button>
          <Button variant="primary" onClick={() => router.push("/register")}>
            Sign Up
          </Button>
        </>
      )}
    </ActionsWrapper>
  );
};

export default Actions;
