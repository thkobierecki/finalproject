import styled from "styled-components";
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

const FormWrapper = styled.div`
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
export {
  Container,
  FormWrapper,
  Column,
  InputsWrapper,
  PreferencesWrapper,
  ButtonsWrapper,
  RowPreferencesWrapper,
  HeadingWrapper,
};
