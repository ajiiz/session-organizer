import { FormEvent, useState } from "react";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import * as S from "./Authentication.styled";
import { signIn } from "next-auth/react";
import { validateEmail } from "network/auth/validateEmail";
import { isEmail } from "utils/FormUtilities";
import { goToLink } from "utils/NavigationUtilities";
import { LoginResponseMessages } from "./ResponseMessages";

interface Props {
  csrfToken: string | undefined;
}

const Login = ({ csrfToken }: Props) => {
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState<null | string>(null);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    console.log("a");
    event.preventDefault();
    try {
      const status: any = await signIn("credentials", {
        email,
        password,
        redirect: false
      });
      if (!status?.ok) {
        setStatusMessage(LoginResponseMessages.Error);
        return;
      }
      goToLink({ link: "/" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailValidation = async (event?: FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }

    if (!isEmail(email)) {
      setStatusMessage(LoginResponseMessages.Invalid);
      return;
    }
    try {
      const data = await validateEmail({ email });
      setIsEmailValid(data.isEmailValid);
      if (data.isEmailValid) {
        setStatusMessage(LoginResponseMessages.Valid);
      } else {
        setStatusMessage(LoginResponseMessages.Invalid);
      }
    } catch (error) {
      console.error("User not found");
      setStatusMessage(LoginResponseMessages.Invalid);
    }
  };

  return (
    <Wrapper flexDirection="column" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <Navbar removeLoginButton={true} />
      <S.SectionWrapper>
        <S.ContentWrapper>
          <S.Header>Log in</S.Header>
          <S.Form onSubmit={event => (isEmailValid ? handleLogin(event) : handleEmailValidation(event))}>
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
                onClick={() => handleEmailValidation()}
                margin={statusMessage === LoginResponseMessages.Null ? "" : "1rem 0 0 0"}
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
