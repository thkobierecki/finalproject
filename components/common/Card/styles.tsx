import styled from "styled-components";
import theme from "theme";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: ${theme.radius.md};
  background-color: #fff;
  box-shadow: ${theme.shadows.base};
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Content = styled.div<{direction?:'row'|'column'}>`
  display: flex;
  flex-direction: ${({direction}) =>direction ? direction : 'column'};
`;

export { Wrapper, Content };
