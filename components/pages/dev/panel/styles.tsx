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
export { Container, FormWrapper, Column, PreferencesWrapper, ButtonsWrapper };
