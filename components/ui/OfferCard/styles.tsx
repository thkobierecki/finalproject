import styled, { css } from "styled-components";
import theme from "theme";

const Container = styled.div`
  cursor: pointer;
  border-radius: ${theme.radius.md};
  border: 1px solid ${theme.colors.neutral.grey.light};
  height: 140px;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 1100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: ${theme.shadows.base};
  .lightSpan {
    font-size: 16px;
  }
  .boldSpan {
    font-size: 16px;
    font-weight: 600;
  }
  .locationChip {
    font-size: 12px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 10px;
    width: fit-content;
    background-color: ${theme.colors.neutral.grey.light};
  }

  .salary {
    font-size: 16px;
    font-weight: 500;
    text-align: right;
    color: ${theme.colors.brand.blue.base};
  }

  .applyButton {
    padding: 10px 40px;
    max-height: 50px;
    text-align: center;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: auto;
    margin-bottom: auto;
    color: #fff;
    background-color: ${theme.colors.brand.blue.base};
    transition: all 0.5s ease-in;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
  .applyButton:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 7px 0 rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 500px) {
    .locationChip {
      font-size: 8px;
    }
    .lightSpan {
      font-size: 12px;
    }
    .boldSpan {
      font-size: 14px;
    }
  }
`;
const Border = styled.div`
  width: 5px;
  height: 140px;
  border-radius: 10px 0 0 10px;
  background-color: ${theme.colors.brand.blue.base};
  position: absolute;
  left: -1px;
  top: -1px;
`;
const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  .chipwrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 10px;
    @media only screen and (max-width: 800px) {
      overflow: hidden;
    }
  }
`;

const Chip = styled.span<any>`
  padding: 4px 8px;
  margin: 3px 3px 0 0;
  border: 1px solid ${theme.colors.neutral.grey.light};
  text-align: center;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 10px;
  transition: all ease 0.2s;
  :hover {
    border: 1px solid ${theme.colors.brand.blue.base};
    color: ${theme.colors.brand.blue.base};
    background-color: ${theme.colors.brand.blue.lightest};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.brand.blue.base};
      color: ${theme.colors.brand.blue.base};
      background-color: ${theme.colors.brand.blue.lightest};
    `}
`;

export { Container, AdditionalInfo, MainInfoWrapper, Border, Chip };
