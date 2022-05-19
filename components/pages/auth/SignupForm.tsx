import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { FormWrapper, FormContainer, SocialWrapper } from "./style";
import Text from "components/common/Text";
import Divider from "./Divider";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const SignupForm = ({ providers }: { providers: any }) => {
  const router = useRouter();
  const [accountType, setAccountType] = useState<"DEVELOPER" | "COMPANY">(
    "DEVELOPER"
  );
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoading] = useState<boolean>(false);
  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const body = JSON.stringify({
        email: data.email,
        password: data.password,
        accountType: accountType,
      });
      const request = await fetch("/api/user/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body,
      });
      console.log(request);
      setLoading(false);
      router.push("/");
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <SocialWrapper>
          <Button
            variant="default"
            style={{ marginRight: "8px" }}
            onClick={() => signIn(providers.google.id)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image width={24} height={24} src="/images/gmail.svg" />
              <Text variant="body" style={{ marginLeft: 4 }}>
                Sign up with Google
              </Text>
            </div>
          </Button>
          <Button variant="default" onClick={() => signIn(providers.github.id)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image width={24} height={24} src="/images/github.svg" />
              <Text variant="body" style={{ marginLeft: 4 }}>
                {" "}
                Sign up with GitHub
              </Text>
            </div>
          </Button>
        </SocialWrapper>
        <Divider />
        <Text variant="headingMedium">Get started for free</Text>
        <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginBottom: 10,
              fontSize: 12,
            }}
          >
            <label>
              <input
                type="checkbox"
                onChange={() => setAccountType("DEVELOPER")}
                checked={accountType === "DEVELOPER"}
              />
              Sign up as a developer
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => setAccountType("COMPANY")}
                checked={accountType === "COMPANY"}
              />
              Sign up as a company
            </label>
          </div>

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
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required={false}
            register={register}
            validate={(val: string) =>
              watch("password") !== val ? "Your passwords must match" : true
            }
            error={errors?.confirmPassword?.message}
          />
          <Button
            loading={isLoading}
            variant="primary"
            type="submit"
            form="registerForm"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Register
          </Button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignupForm;
