import { signup } from "network/auth/signup";
import { useState, ChangeEvent, FormEvent } from "react";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { goToLink } from "utils/NavigationUtilities";
import { SignupRequest } from "../../../../pages/api/auth/signup";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import * as S from "./Authentication.styled";
import { isEmail } from "utils/FormUtilities";
import { RegisterResponseMessages } from "./ResponseMessages";

const Signup = () => {
  const [formData, setFormData] = useState<SignupRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    groupCode: ""
  });
  const [statusMessage, setStatusMessage] = useState<null | string>(null);

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isEmail(formData.email)) {
      setStatusMessage(RegisterResponseMessages.Invalid);
      return;
    }
    try {
      console.log(formData);
      await signup(formData);
      goToLink({ link: "/signin" });
    } catch (error) {
      console.error(error);
      setStatusMessage(RegisterResponseMessages.Error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Wrapper flexDirection="column" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <Navbar removeRegisterButton={true} />
      <S.SectionWrapper>
        <S.ContentWrapper>
          <S.Header>Register</S.Header>
          <S.Form onSubmit={event => handleSignup(event)}>
            <S.InputLabel>Email</S.InputLabel>
            <S.Input
              name="email"
              placeholder="Enter your email address..."
              type="text"
              onChange={event => handleChange(event)}
              margin="0.4rem 0 0.6rem 0"
            />
            {statusMessage ? <S.StatusMessage>{statusMessage}</S.StatusMessage> : null}
            <S.InputLabel>Password</S.InputLabel>
            <S.Input
              name="password"
              placeholder="Enter your password..."
              type="password"
              onChange={event => handleChange(event)}
              margin="0.4rem 0 0.6rem 0"
            />
            <S.NameInputsWrapper>
              <S.NameInputWrapper>
                <S.InputLabel>First name</S.InputLabel>
                <S.Input
                  name="firstName"
                  placeholder="Enter your name..."
                  type="text"
                  onChange={event => handleChange(event)}
                  margin="0.4rem 0 0.6rem 0"
                />
              </S.NameInputWrapper>
              <S.NameInputWrapper>
                <S.InputLabel>Last name</S.InputLabel>
                <S.Input
                  name="lastName"
                  placeholder="Enter your surname..."
                  type="text"
                  onChange={event => handleChange(event)}
                  margin="0.4rem 0 0.6rem 0"
                />
              </S.NameInputWrapper>
            </S.NameInputsWrapper>
            <S.InputLabel>*Group code</S.InputLabel>
            <S.Input
              name="groupCode"
              placeholder="Enter your group code..."
              type="text"
              onChange={event => handleChange(event)}
              margin="0.4rem 0 0.6rem 0"
            />
            <S.Button type="submit" margin="1rem 0 0 0">
              {"Register"}
            </S.Button>
          </S.Form>
        </S.ContentWrapper>
      </S.SectionWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Signup;
