import styled from "styled-components";
import theme from "theme";

const { colors } = theme;

interface ButtonDisplayProps {
  size: "sm" | "base";
  hasText: boolean;
  hasDropdown: boolean;
}

const BaseButton = styled.button<ButtonDisplayProps>`
  position: relative;
  box-sizing: border-box;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-family: ${theme.fontFamily};
  font-weight: 400;
  border: 1px solid;
  background-color: transparent;
  white-space: nowrap;
  ${(props) => {
    let height = "40px";
    let paddingLeft = "24px";
    let paddingRight = "24px";
    let borderRadius = "8px";
    let fontSize = "16px";
    let spacing = "8px";
    let outlineWidth = "4px";
    if (props.hasDropdown) {
      paddingRight = "16px";
    }
    if (props.size === "sm") {
      height = "32px";
      paddingLeft = "16px";
      paddingRight = "16px";
      borderRadius = "4px";
      fontSize = "14px";
      outlineWidth = "2px";
      if (props.hasDropdown) {
        paddingRight = "8px";
      }
    }
    if (!props.hasText) {
      paddingLeft = "8px";
      paddingRight = "8px";
      spacing = "4px";
    }
    return `
      --outline-width: ${outlineWidth};
      height: ${height};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};
      border-radius: ${borderRadius};
      font-size: ${fontSize};
      & > * + * {
        margin-left: ${spacing};
      }
    `;
  }}
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    pointer-events: none;
    cursor: unset !important;
  }
  & > span {
    position: relative;
    top: -1px;
  }
`;

export const DefaultButton = styled(BaseButton as any)`
  border-color: ${colors.neutral.grey.dark};
  background-color: white;
  box-shadow: 0 1px 3px rgba(55, 66, 77, 0.15);
  color: ${({ hasText }) =>
    hasText ? colors.neutral.ink.base : colors.secondary.blue.base};
  &:hover {
    background-color: ${colors.neutral.grey.lightest};
  }
  &:active {
    background-color: ${colors.neutral.grey.lightest};
    border-color: ${colors.secondary.blue.base};
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.blue.light};
  }
  &:focus {
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.blue.light};
    outline: 0;
  }
  &:disabled {
    box-shadow: none !important;
    background-color: ${colors.neutral.grey.base} !important;
    border-color: ${colors.neutral.grey.base} !important;
    color: ${colors.neutral.ink.light} !important;
  }
`;

export const DefaultDestructiveButton = styled(DefaultButton as any)`
  color: ${colors.secondary.red.base};
  &:hover {
    color: ${colors.secondary.red.dark};
  }
  &:active {
    border-color: ${colors.secondary.red.base};
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.red.light};
    color: ${colors.secondary.red.dark};
  }
  &:focus {
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.red.light};
  }
`;

export const PrimaryButton = styled(DefaultButton as any)`
  background-color: ${colors.secondary.blue.base};
  border-color: ${colors.secondary.blue.base};
  color: white;
  &:hover {
    background-color: ${colors.secondary.blue.dark};
    border-color: ${colors.secondary.blue.dark};
  }
  &:active {
    background-color: ${colors.secondary.blue.dark};
    border-color: ${colors.secondary.blue.dark};
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.blue.light};
  }
  &:focus {
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.blue.light};
  }
`;

export const PrimaryDestructiveButton = styled(PrimaryButton as any)`
  background-color: ${colors.secondary.red.base};
  border-color: ${colors.secondary.red.base};
  color: white;
  &:hover {
    background-color: ${colors.secondary.red.dark};
    border-color: ${colors.secondary.red.dark};
  }
  &:active {
    background-color: ${colors.secondary.red.dark};
    border-color: ${colors.secondary.red.dark};
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.red.light};
  }
  &:focus {
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.red.light};
  }
`;

export const FlatButton = styled(BaseButton as any)`
  border-color: transparent;
  box-shadow: none;
  color: ${colors.neutral.ink.base};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:focus {
    box-shadow: 0 0 0 var(--outline-width) ${colors.secondary.blue.light};
    outline: 0;
  }
  &:disabled {
    background-color: transparent;
    border-color: transparent;
  }
`;

export const UnstyledButton = styled.button`
  appearance: none;
  border: 0;
  background-color: transparent;
  padding: 0;
  font: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export const LinkButton = styled(UnstyledButton)<ButtonDisplayProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-family: ${theme.text.link.fontFamily};
  font-size: ${theme.text.link.fontSize};
  font-weight: ${theme.text.link.fontWeight};
  line-height: ${theme.text.link.lineHeight};
  text-decoration: ${theme.text.link.textDecoration};
  color: ${theme.colors.secondary.blue.base};
  &:hover {
    color: ${theme.colors.secondary.blue.dark};
  }
  & > * + * {
    margin-left: ${theme.sizes.xs};
  }
  /* TODO: - Fix typography so these hacks aren't needed */
  & > span {
    position: relative;
    top: -1px;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
