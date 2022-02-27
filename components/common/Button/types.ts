import { ReactNode, ButtonHTMLAttributes } from "react";

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
  dropdown?: boolean;
  loading?: boolean;
}
