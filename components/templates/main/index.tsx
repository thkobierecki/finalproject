import Header from "components/ui/Header";
import { Container } from "./styles";
type Props = {
  children: React.ReactNode;
};
const MainTemplate = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default MainTemplate;
