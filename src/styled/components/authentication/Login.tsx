import { FormEvent, useMemo, useState } from "react";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import * as S from "./Authentication.styled";
import { signIn } from "next-auth/react";
import { validateEmail } from "network/auth/validateEmail";

interface Props {
  csrfToken: string | undefined;
}

const Login = ({ csrfToken }: Props) => {
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const statusMessage = useMemo(
    () =>
      isEmailValid === null
        ? ""
        : !isEmailValid
        ? "Your provided email is invalid. Provide correct email or sign up."
        : "Your provided email is valid. Insert your password and sign in.",
    [isEmailValid]
  );

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: `${window.location.origin}/`
    });
  };

  const handleEmailValidation = async () => {
    try {
      const data = await validateEmail({ email });
      setIsEmailValid(data.isEmailValid);
    } catch (error) {
      console.error("User not found");
      setIsEmailValid(false);
    }
  };

  return (
    <Wrapper flexDirection="column" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <Navbar removeButtons={true} />
      <S.SectionWrapper>
        <S.ContentWrapper>
          <S.Header>Log in</S.Header>
          <S.Form onSubmit={event => login(event)}>
            <S.Input name="csrfToken" type="hidden" defaultValue={csrfToken ?? ""} />
            <S.InputLabel>Email</S.InputLabel>
            <S.Input
              name="email"
              placeholder="Enter your email address..."
              type="email"
              onChange={event => setEmail(event.target.value as string)}
            />
            {statusMessage ? <S.StatusMessage>{statusMessage}</S.StatusMessage> : null}
            {isEmailValid ? (
              <>
                <S.InputLabel>Password</S.InputLabel>
                <S.Input
                  name="password"
                  placeholder="Enter your password..."
                  type="password"
                  onChange={event => setPassword(event.target.value as string)}
                />
                <S.Button type={"submit"} margin="1rem 0 0 0">
                  {"Log in"}
                </S.Button>
              </>
            ) : (
              <S.Button
                type={"button"}
                onClick={handleEmailValidation}
                margin={isEmailValid !== null && !isEmailValid ? "" : "1rem 0 0 0"}
              >
                {"Continue with your email"}
              </S.Button>
            )}
          </S.Form>
        </S.ContentWrapper>
      </S.SectionWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Login;
