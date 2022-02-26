import React, { forwardRef } from "react";
import Loader from "components/common/Loader";

import { ButtonProps } from "./types";

import {
  DefaultButton,
  DefaultDestructiveButton,
  PrimaryButton,
  PrimaryDestructiveButton,
  FlatButton,
  LinkButton,
  UnstyledButton,
  LoadingWrapper,
} from "./styled";

const variantMap = {
  default: DefaultButton,
  primary: PrimaryButton,
  destructive: DefaultDestructiveButton,
  primaryDestructive: PrimaryDestructiveButton,
  flat: FlatButton,
  link: LinkButton,
  unstyled: UnstyledButton,
};

/**
 * Use a Button when users need to trigger an action.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "default",
      size = "base",
      dropdown = false,
      loading = false,
      ...otherProps
    }: ButtonProps,
    ref
  ) => {
    if (variant === "unstyled") {
      return (
        <UnstyledButton ref={ref} className={className} {...otherProps}>
          {children}
        </UnstyledButton>
      );
    }

    const VariantButton = variantMap[variant];

    if (loading) {
      return (
        <VariantButton
          ref={ref}
          className={className}
          size={size}
          hasText={!!children}
          hasDropdown={dropdown}
          {...otherProps}
        >
          {children && <span style={{ opacity: 0 }}>{children}</span>}
          <LoadingWrapper>
            <Loader />
          </LoadingWrapper>
        </VariantButton>
      );
    }

    return (
      <VariantButton
        ref={ref}
        className={className}
        size={size}
        hasText={!!children}
        hasDropdown={dropdown}
        {...otherProps}
      >
        {children && <span>{children}</span>}
      </VariantButton>
    );
  }
);

export default Button;
