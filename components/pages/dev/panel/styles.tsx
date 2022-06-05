import styled from "styled-components";
import theme from "theme";
const Container = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;
const PreferencesWrapper = styled.div`
  max-width: 900px;
  margin: 0px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
`;

const Column = styled.div`
  min-width: 300px;
  width: calc(50% - 50px);
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 840px) {
    width: 100%;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;
const RowPreferencesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;
const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .editButton {
    width: 100px;
  }
`;

const Table=styled.table`
  margin-top: 30px;
  padding:10px;
  border-radius: ${theme.radius.base};
  border: 1px solid ${theme.colors.neutral.grey.lightest};
  background-color: #fff;
  border-spacing: 0;
`;
const Tb=styled.tbody``;
const Tr=styled.tr`
  &:nth-child(odd) {
    :hover { background-color: ${theme.colors.neutral.grey.light};}
  }
  &:first-child {
    :hover { background-color: #fff;}
  }
`;
const Th=styled.th`
  text-align: left;
  padding: 10px;
`;
const Td=styled.td`
  text-align: left;
  margin:0;
  padding: 10px;
  border-top: 1px solid ${theme.colors.neutral.grey.light};
`;

export const LogoMock = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  line-height: 20px;
  background-color: ${theme.colors.neutral.grey.light};
  border-radius: ${theme.radius.base};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  flex-direction:row;
`
export {
  Container,
  FormWrapper,
  Column,
  InputsWrapper,
  PreferencesWrapper,
  ButtonsWrapper,
  RowPreferencesWrapper,
  HeadingWrapper,
  Table,
  Tb,
  Tr,
  Th,
  Td
};
