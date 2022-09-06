import { FormEvent, useState } from "react";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import * as S from "./Authentication.styled";
import { signIn } from "next-auth/react";

interface Props {
  csrfToken: string | undefined;
}

const Login = ({ csrfToken }: Props) => {
  // eslint-disable-next-line no-unused-vars
  const [isEmailValid, setIsEmailValid] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [statusMessage, setStatusMessage] = useState("Your provided email is valid. Insert your password and sign in.");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: `${window.location.origin}/`
    });
  };

  const handleEmailValidation = () => {
    console.log("Check the email from the database");
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
              <S.Button type={"button"} onClick={handleEmailValidation}>
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
