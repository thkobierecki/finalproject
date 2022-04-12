import { useState, ChangeEvent, FormEvent } from "react";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { FormWrapper, FormContainer, SocialWrapper } from "./style";
import Text from "components/common/Text";
import Divider from "./Divider";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const SignInForm = ({ providers }: { providers: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: `${window.location.origin}/dev/panel/profile`,
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  console.log(errors);
  return (
    <FormContainer>
      <FormWrapper>
        <SocialWrapper>
          <Button
            variant="default"
            style={{ marginRight: "8px" }}
            onClick={() =>
              signIn(providers.google.id, {
                callbackUrl: `${window.location.origin}/dev/panel/profile`,
              })
            }
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image width={24} height={24} src="/images/gmail.svg" />
              <Text variant="body" style={{ marginLeft: 4 }}>
                Sign in with Google
              </Text>
            </div>
          </Button>
          <Button
            variant="default"
            onClick={() =>
              signIn(providers.github.id, {
                callbackUrl: `${window.location.origin}/dev/panel/profile`,
              })
            }
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image width={24} height={24} src="/images/github.svg" />
              <Text variant="body" style={{ marginLeft: 4 }}>
                {" "}
                Sign in with GitHub
              </Text>
            </div>
          </Button>
        </SocialWrapper>
        <Divider />
        <Text variant="headingMedium">Sign In</Text>
        <form id="signInForm" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            name="email"
            register={register}
            placeholder="Email"
            required="This field is required"
            error={errors?.email?.message}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            required="This field is required"
            register={register}
            error={errors?.password?.message}
          />
          <Button
            loading={isLoading}
            variant="primary"
            type="submit"
            form="signInForm"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Sign In
          </Button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignInForm;
