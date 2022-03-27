import SideNav from "components/ui/SideNav";
import MainTemplate from "../main";
import { Container, Main } from "./styles";

type Props = {
  children: React.ReactNode;
};
const PanelTemplate = ({ children }: Props) => {
  return (
    <MainTemplate>
      <Container>
        <SideNav />
        <Main>{children}</Main>
      </Container>
    </MainTemplate>
  );
};

export default PanelTemplate;
