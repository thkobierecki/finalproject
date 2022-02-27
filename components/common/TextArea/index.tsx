import { ChangeEvent } from "react";
import { Label, StyledInput, ErrorWrapper, InputWrapper } from "./styles";

type InputProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
