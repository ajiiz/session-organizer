import { StyledButton, StyledButtonProps } from "./Button.styled";

interface ButtonProps extends StyledButtonProps {
  children: string;
  onClick?: () => any;
}

const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
