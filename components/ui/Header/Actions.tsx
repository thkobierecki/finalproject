import Button from "components/common/Button";
import { useSession, signOut } from "next-auth/react";
import router from "next/router";
import { ActionsWrapper } from "./styles";

const Actions = () => {
  const { data } = useSession();
  return (
    <ActionsWrapper>
      {data ? (
        <Button variant="primary" onClick={() => signOut()}>
          Log Out
        </Button>
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
