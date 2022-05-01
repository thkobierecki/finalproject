import { ChangeEvent, FormEvent } from "react";
import { UseFormRegister } from "react-hook-form";
import { Label, StyledInput, ErrorWrapper, InputWrapper } from "./styles";
type SelectOptions = {
  type: string,
  icon?: string,
  text: string,
  value: number,
}
type InputProps = {
  label?: string;
  error?: string;
  disabled?: boolean;
  name: string;
  placeholder?: string;
  required?: boolean | string;
  register: UseFormRegister<any>;
  validate?: any;
  options: SelectOptions[];
};
const Select = ({
  label,
  name,
  error,
  disabled,
  placeholder,
  required,
  register,
  validate,
  options,
  ...otherProps
}: InputProps) => {
  return (
    <InputWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        error={error}
        disabled={disabled}
        {...register(name, { required, validate })}
        placeholder={placeholder}
        {...otherProps}
      >
        {options.map((option) => (
          <option
            key={option.text}
            value={option.value}
          >
            {option.text}
          </option>
      ))}
      </StyledInput>
      <ErrorWrapper>{error}</ErrorWrapper>
    </InputWrapper>
  );
};

export default Select;