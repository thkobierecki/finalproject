import styled from "styled-components";
import theme from "theme";

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
`;
const HeroContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1 1 0%;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  background: linear-gradient(
    0deg,
    rgb(239, 241, 246) 0%,
    rgb(247, 248, 250) 19.64%,
    rgb(255, 255, 255) 100%
  );
  border-left: 1px solid ${theme.colors.neutral.grey.base};
`;
export { Container, HeroContainer, HeroWrapper };
