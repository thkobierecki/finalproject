import MainTemplate from "components/templates/main";
import HeroSection from "./HeroSection";
import { Container } from "./styles";
const LandingPage = () => {
  return (
    <MainTemplate>
      <Container>
        <HeroSection />
      </Container>
    </MainTemplate>
  );
};

export default LandingPage;
