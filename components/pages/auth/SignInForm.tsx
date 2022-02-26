import { useState, ChangeEvent, FormEvent } from "react";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { FormWrapper, FormContainer, SocialWrapper } from "./style";
import Text from "components/common/Text";
import Divider from "./Divider";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignInForm = ({ providers }: { providers: any }) => {
  const [state, setState] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [errors, setError] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [e.target.name]: e.target.value });

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
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const hasInvalidPassword = validatePassword();
    if (!hasInvalidPassword) {
      try {
        signIn("credentials", { email: state.email, password: state.password });
        setLoading(false);
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
                Sign in with Google
              </Text>
            </div>
          </Button>
          <Button variant="default" onClick={() => signIn(providers.github.id)}>
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
        <form onSubmit={handleSubmit}>
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
          <Button
            loading={isLoading}
            variant="primary"
            type="submit"
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
