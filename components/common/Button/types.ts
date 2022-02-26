import { ReactNode, ButtonHTMLAttributes } from "react";
import { GlyphName } from "components/common/Glyph/types";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "primary"
  | "primaryDestructive"
  | "flat"
  | "link"
  | "unstyled";

/**
 * Button properties.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "base";
  iconName?: GlyphName;
  dropdown?: boolean;
  loading?: boolean;
}
