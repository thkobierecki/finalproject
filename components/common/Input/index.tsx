import { ChangeEvent, FormEvent } from "react";
import { Label, StyledInput, ErrorWrapper, InputWrapper } from "./styles";

type InputProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  placeholder?: string;
  required?: boolean;
};
const Input = ({
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
}: InputProps) => {
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

export default Input;
