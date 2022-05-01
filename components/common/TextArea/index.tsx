import { ChangeEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { Label, StyledInput, ErrorWrapper, InputWrapper } from "./styles";

type InputProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  placeholder?: string;
  required?: boolean | string;
  register: UseFormRegister<any>;
  validate?: any;
};
const Input = ({
  label,
  name,
  error,
  disabled,
  placeholder,
  required,
  register,
  validate,
  ...otherProps
}: InputProps) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        error={error}
        disabled={disabled}
        {...register(name, { required })}
        placeholder={placeholder}
        {...otherProps}
      />
      <ErrorWrapper>{error}</ErrorWrapper>
    </InputWrapper>
  );
};

export default Input;
