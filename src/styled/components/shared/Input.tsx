import { ChangeEvent } from "react";
import { InputElement } from "src/styled/elements/shared/InputElement";
import { InputText } from "src/styled/elements/shared/InputText";
import { InputWrapper } from "src/styled/elements/shared/InputWrapper";

interface InputProps {
  type: string;
  placeholder?: string;
  text: string;
  name: string;
  value: string;
  width?: string;
  padding?: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, text, placeholder, value, name, width, padding, handleChange }: InputProps) => {
  return (
    <InputWrapper>
      <InputText>{text}</InputText>
      <InputElement value={value} name={name} placeholder={placeholder} type={type} width={width} padding={padding} onChange={handleChange} />
    </InputWrapper>
  );
};

export default Input;
