import { Container } from "./style";
import MainTemplate from "components/templates/main";
import SignupForm from "./SignupForm";
import HeroSection from "./HeroSection";

const RegisterPage = ({ providers }: { providers: any }) => {
  return (
    <MainTemplate>
      <Container>
        <SignupForm providers={providers} />
        <HeroSection />
      </Container>
    </MainTemplate>
  );
};

export default RegisterPage;
