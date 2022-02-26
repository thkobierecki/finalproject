import styled from "styled-components";
import { textVariants } from "./textVariants";
import text from "theme/text";
type TextVariant = typeof textVariants;
export interface TextProps {
  variant?: keyof TextVariant;
}

const Text = styled.span<TextProps>`
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  font-family: "Sofia-pro", "Open Sans", -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol;
  line-height: 16px;
  color: #37424d;
  ${(props) => {
    const { variant } = props;
    if (variant) {
      return `
        font-family: ${text[variant].fontFamily};
        font-style: ${text[variant].fontStyle};
        font-weight: ${text[variant].fontWeight};
        font-size: ${text[variant].fontSize};
        line-height: ${text[variant].lineHeight};
        color: ${text[variant].color};
        text-decoration: ${text[variant].textDecoration};
        letter-spacing: ${text[variant].letterSpacing};
      `;
    }
    return "";
  }}
`;

export * from "./textVariants";

export default Text;
