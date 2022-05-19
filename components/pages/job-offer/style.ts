import styled from "styled-components";
import theme from "theme";

export const SContainer = styled.div`
  display:flex;
  flex-direction:column;
`
export const Row = styled.div`
  display:flex;
  flex-direction:row;
`;

export const Container = styled.main`
  padding: 20px 40px 50px 40px;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;

  aside {
    position: relative;
    min-width: 350px;
    max-width: 350px;
    overflow: visible;
    overflow-x: visible !important;
  }
  @media only screen and (max-width: 1000px) {
    aside {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const OfferCard = styled.div`
  position: sticky;
  top: 20px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e4e7f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  h2 {
    margin: 0;
    margin-bottom: 10px;
  }
  .wage {
    font-size: 20px;
    font-weight: 500;
  }

  .chipwrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .chipwrapper .locationChip {
    padding: 3px 10px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: fit-content;
    background-color: ${ theme.colors.neutral.grey.base};
  }
`;

export const OfferWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  position: relative;
  background-color: #fff;
  margin-bottom: 16px;
  width: 100%;
  max-width: 848px;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  border: 1px solid #e4e7f0;
`;

export const CompanyHiglights = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e4e7f0;
  .logoWrapper {
    width: 100px;
    height: 100%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lightSpan {
    font-size: 28px;
    font-weight: 600;
  }
  .boldSpan {
    font-size: 20px;
    font-weight: 600;
  }
  .locationChip {
    padding: 3px 10px;
    border-radius: 10px;
    width: fit-content;
    background-color: ${theme.colors.neutral.grey.light};
  }
  @media only screen and (max-width: 450px) {
    padding: 20px 10px;
    .lightSpan {
      font-size: 20px;
    }
    .boldSpan {
      font-size: 16px;
    }
  }
`;
export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;

export const OfferHeading = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e4e7f0;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 5px;
    margin-left: 0;
  }
  .money {
    font-size: 20px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .wrap {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const OfferContent = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const JobDescription = styled.div`
  max-width: 560px;
  overflow-x: hidden;
  padding-right: 48px;
  @media only screen and (max-width: 450px) {
    padding-right: 0;
  }
`;

export const OfferHighlights = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  /* max-width: 272px; */
  margin-left: 16px;

  .colWrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
  }
  .chipwrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .chipwrapper .locationChip {
    padding: 3px 10px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    width: fit-content;
    background-color: ${theme.colors.neutral.grey.light};
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    .colWrapper {
      width: 140px;
    }
    .chipwrapper {
      width: 100%;
    }
  }
  @media only screen and (max-width: 450px) {
    .colWrapper {
      width: 100%;
    }
  }
`;

export const ApplyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ApplyButton = styled.a<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0 30px;
  min-width: 200px;
  width: ${({ width }) => width && width};
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: ${theme.colors.brand.blue.dark};
`;
