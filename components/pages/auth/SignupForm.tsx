import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { FormWrapper, FormContainer, SocialWrapper } from "./style";
import Text from "components/common/Text";
import Divider from "./Divider";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignupForm = ({ providers }: { providers: any }) => {
  const router = useRouter();
  const [state, setState] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
    accountType: string;
  }>({
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "DEVELOPER",
  });
  const [errors, setError] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({ email: "", password: "", confirmPassword: "" });
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleChangeAccountType = (type: string) =>
    setState({ ...state, accountType: type });
  const validatePassword = () => {
    const hasLength = state.password.length >= 8;
    if (!hasLength) {
      setError({
        ...errors,
        password: "Your Password must be at least 8 characters.",
      });
      return true;
    }
    return false;
  };
  const validateConfirmationPassword = () => {
    const areTheSame = state.password === state.confirmPassword;
    if (!areTheSame) {
      setError({ ...errors, confirmPassword: "Passwords must match." });
      return true;
    }
    return false;
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const hasInvalidPassword = validatePassword();
    const hasInvalidConfirmation = validateConfirmationPassword();
    if (!hasInvalidPassword && !hasInvalidConfirmation) {
      try {
        const body = JSON.stringify({
          email: state.email,
          password: state.password,
          accountType: state.accountType,
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
    }
    setLoading(false);
    return;
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
        <form onSubmit={handleSubmit}>
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
                onChange={() => handleChangeAccountType("DEVELOPER")}
                checked={state.accountType === "DEVELOPER"}
              />
              Sign up as a developer
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() => handleChangeAccountType("COMPANY")}
                checked={state.accountType === "COMPANY"}
              />
              Sign up as a company
            </label>
          </div>

          <Input
            label="Email"
            type="email"
            name="email"
            value={state.email}
            placeholder="Email"
            required
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={state.password}
            required
            onChange={handleChange}
            error={errors.password}
          />
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            required
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <Button
            loading={isLoading}
            variant="primary"
            type="submit"
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
