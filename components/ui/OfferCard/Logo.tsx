import styled, { css } from "styled-components";
import theme from "theme";

const Container = styled.div<{ big?: boolean }>`
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${ theme.colors.neutral.grey.light};
  z-index: 99;
  ${({ big }) =>
    big &&
    css`
      height: 100px;
      width: 100px;
    `}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
type Props = {
  logo?: string;
  big?: boolean;
};
const Logo = ({ logo, big }: Props) => {
  return (
    <Container big={big}>
      <Img src={logo} />
    </Container>
  );
};
export default Logo;