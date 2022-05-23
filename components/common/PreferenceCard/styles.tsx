import styled from "styled-components";
import theme from "theme";
const Container = styled.div`
  width: 200px;
  height: 80px;
  padding: 25px 15px;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: ${theme.radius.base};
  box-shadow: ${theme.shadows.base};

  .header {
    font-size: 1rem;
    color: #585858;
  }
  .subheader {
    font-size: 0.7rem;
    color: lightgray;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const Pill = styled.div`
display: flex;
margin-left: 15px;
border-radius: ${theme.radius.lg};
background-color: ${theme.colors.secondary.aqua.light};
color: ${theme.colors.neutral.ink.dark};
padding: 3px 5px;
align-items: center;
justify-content: center;
width: 35px;
height: 20px;
font-size: 12px;
`
export { Container, Wrapper,Pill , Row};
