import { Container } from "./style";
import MainTemplate from "components/templates/main";
import SignInForm from "./SignInForm";
import HeroSection from "./HeroSection";

const RegisterPage = ({ providers }: { providers: any }) => {
  return (
    <MainTemplate>
      <Container>
        <SignInForm providers={providers} />
        <HeroSection />
      </Container>
    </MainTemplate>
  );
};

export default RegisterPage;
