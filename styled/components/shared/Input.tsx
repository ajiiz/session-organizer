import { InputElement } from "styled/elements/shared/InputElement";
import { InputText } from "styled/elements/shared/InputText";
import { InputWrapper } from "styled/elements/shared/InputWrapper";

interface InputProps {
  type: string;
  placeholder?: string;
  text: string;
  name: string;
  value: string;
  width?: string;
  padding?: string;
}

const Input = ({ type, text, placeholder, value, name, width, padding }: InputProps) => {
  return (
    <InputWrapper>
      <InputText>{text}</InputText>
      <InputElement value={value} name={name} placeholder={placeholder} type={type} width={width} padding={padding} />
    </InputWrapper>
  );
};

export default Input;
