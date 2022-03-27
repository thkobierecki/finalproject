import styled from "styled-components";
import theme from "theme";

const Label = styled.label`
  margin-bottom: 4px;
  font-size: ${theme.sizes.md};
`;
const StyledInput = styled.textarea<any>`
  width: 100%;
  border: ${({ error }) =>
    error
      ? `1px solid ${theme.colors.secondary.red.base}`
      : `1px solid ${theme.colors.neutral.grey.base}`};
  padding: 2px 4px;
  margin-bottom: 5px;
  height: 100px;
  border-radius: ${theme.radius.base};
`;
const ErrorWrapper = styled.div`
  color: ${theme.colors.secondary.red.base};
  font-size: ${theme.sizes.md};
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
`;

export { Label, StyledInput, ErrorWrapper, InputWrapper };
