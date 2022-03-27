import styled, { css } from "styled-components";
import theme from "theme";
const Container = styled.aside`
  flex-shrink: 0;
  width: 160px;
  padding: 20px 0px;
  text-align: center;
  border-right: 1px solid ${theme.colors.neutral.grey.base};
  background: white;
`;
const Wrapper = styled.div``;
const Navigation = styled.nav`
  position: relative;
  list-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
`;
const NavItem = styled.a<any>`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;
  :hover {
    cursor: pointer;
    text-decoration: none;
    background-color: #e4e6fc4c;
  }
  .navIcon {
    color: #000;
    margin-right: 10px;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border-left: ${theme.colors.brand.blue.base} solid 4px;
      .navIcon {
        color: ${theme.colors.brand.blue.base};
      }
      ::before {
        left: 0px;
        width: 47px;
        height: 100%;
        content: "";
        display: block;
        opacity: 0.4;
        position: absolute;
        background: linear-gradient(
          90deg,
          #4ca1d9 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    `}
`;

export { Container, Wrapper, Navigation, NavItem };
