import { ChangeEvent, FormEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { Label, StyledInput, ErrorWrapper, InputWrapper } from "./styles";

type InputProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  type: string;
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
  type,
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
        type={type}
        error={error}
        disabled={disabled}
        {...register(name, { required, validate })}
        placeholder={placeholder}
        {...otherProps}
      />
      <ErrorWrapper>{error}</ErrorWrapper>
    </InputWrapper>
  );
};

export default Input;

type UnregisterInputProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string | number;
  placeholder?: string;
  required?: boolean;
};
export const UnregisterInput = ({
  label,
  name,
  error,
  disabled,
  onChange,
  type,
  value,
  placeholder,
  required,
  ...otherProps
}: UnregisterInputProps) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        name={name}
        aria-name={name}
        type={type}
        error={error}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        value={value}
        placeholder={placeholder}
        required={required}
        {...otherProps}
      />
      <ErrorWrapper>{error}</ErrorWrapper>
    </InputWrapper>
  );
};
