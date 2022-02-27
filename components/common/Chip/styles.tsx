import styled from "styled-components";
import theme from "theme";
export const ChipBtn = styled.button<any>`
  border: 2px solid
    ${({ active }) =>
      active ? theme.colors.brand.blue.base : theme.colors.neutral.grey.base};
  border-radius: 24px;
  text-transform: none;
  min-width: 100px;
  margin: 5px;
  padding: 9px 21px;
  background-color: ${({ active }) =>
    active ? theme.colors.brand.blue.lightest : " transparent"};
  color: ${({ active }) => (active ? theme.colors.brand.blue.base : "#000")};
  transition: all 0.2s ease;
  font-size: 10px;
  cursor: pointer;
  outline: none;
  :hover {
    border-color: ${theme.colors.brand.blue.base};
    background-color: ${theme.colors.brand.blue.lightest};
    color: ${theme.colors.brand.blue.base};
  }
`;
