import { useState, ChangeEvent, FormEvent } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Register: NextPage = () => {
  const router = useRouter();
  const [state, setState] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({ email: "", password: "", confirmPassword: "" });
  const [errors, setError] = useState<{
    email: string;
    password: string;
    confirmPassword: string;
  }>({ email: "", password: "", confirmPassword: "" });
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
  const validateConfirmationPassword = () => {
    const areTheSame = state.password === state.confirmPassword;
    if (!areTheSame) {
      setError({ ...errors, confirmPassword: "Passwords must match." });
      return true;
    }
    return false;
  };
  console.log(state);
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          required
          onChange={(e) => handleChange(e)}
        />
        {errors.email && <span>{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          required
          onChange={(e) => handleChange(e)}
        />
        {errors.password && <span>{errors.password}</span>}
        <label htmlFor="confirm">ConfirmPassword</label>
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          required
          onChange={(e) => handleChange(e)}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
