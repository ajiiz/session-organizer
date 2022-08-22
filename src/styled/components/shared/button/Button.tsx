import { StyledButton } from "./button.styled";

interface ButtonProps {
  children: string;
  backgroundColor?: string & {};
  fontColor: string & {};
}

const Button = ({ children, fontColor, backgroundColor }: ButtonProps) => {
  return (
    <StyledButton fontColor={fontColor} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
