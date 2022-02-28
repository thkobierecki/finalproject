import styled, { css } from "styled-components";
import theme from "theme";

const Container = styled.button<any>`
  border-radius: 10px;
  cursor: pointer;
  width: 120px;
  height: 120px;
  font-size: 12px;
  line-height: 20px;
  padding: 8px 20px;
  margin-right: 15px;
  border: 2px solid ${theme.colors.neutral.grey.base};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;
  background: #fff;
  color: ${theme.colors.neutral.grey.dark};
  :hover {
    background: ${theme.colors.brand.blue.lightest};
    border: 2px solid ${theme.colors.brand.blue.base};
    color: ${theme.colors.brand.blue.base};
    .iconButton {
      stroke: ${theme.colors.brand.blue.base};
      fill: ${theme.colors.brand.blue.base};
    }
  }
  .iconButton {
    width: 40px;
    height: 40px;
    fill: ${({ isActive }) =>
      isActive ? theme.colors.brand.blue.base : theme.colors.neutral.grey.dark};
    stroke: ${({ isActive }) =>
      isActive ? theme.colors.brand.blue.base : theme.colors.neutral.grey.dark};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px solid ${theme.colors.brand.blue.base};
      color: ${theme.colors.brand.blue.base};
      background: ${theme.colors.brand.blue.lightest};
    `}
`;
export { Container };
