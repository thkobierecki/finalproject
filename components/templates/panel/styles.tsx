import styled from "styled-components";

const Container = styled.div`
  background: rgb(243, 246, 248);
  display: flex;
  height: calc(100vh - 57px);
`;
const Main = styled.main`
  flex-grow: 1;
  position: relative;
  padding: 20px;
  max-width: calc(100% - 160px);
  overflow-y: scroll;
`;

export { Container, Main };
