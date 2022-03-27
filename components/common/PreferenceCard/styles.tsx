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
export { Container, Wrapper };
