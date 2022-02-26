import styled from "styled-components";
import theme from "theme";

const Container = styled.main`
  display: flex;
  flex: 1 1 0%;
`;

const FormContainer = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  padding: 0px 84px;
  min-width: 450px;
  max-width: 600px;
  min-height: 0px;
  text-align: center;

  form {
    width: 100%;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 0 0 50%;
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

const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const DividerContainer = styled.div`
  height: 2px;
  background: ${theme.colors.neutral.grey.base};
  margin: 20px 0px 16px;
  text-align: center;

  span {
    font-size: 14px;
    color: ${theme.colors.neutral.grey.base};
    background: rgb(255, 255, 255);
    padding: 0px 20px;
    position: relative;
    top: -12px;
  }
`;

export {
  Container,
  FormContainer,
  FormWrapper,
  HeroContainer,
  HeroWrapper,
  SocialWrapper,
  DividerContainer,
};
