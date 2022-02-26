import styled from "styled-components";
import theme from "theme";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid ${theme.colors.neutral.grey.base};
`;
const LogoWrapper = styled.div`
  font-size: ${theme.sizes.lg};
  font-weight: 600;
`;
const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { HeaderWrapper, LogoWrapper, ActionsWrapper };
