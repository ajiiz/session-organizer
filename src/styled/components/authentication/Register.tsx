import { signup } from "network/auth/signup";
import { useState, ChangeEvent, FormEvent, useMemo } from "react";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { goToLink } from "utils/NavigationUtilities";
import { SignupRequest } from "../../../../pages/api/auth/signup";
import { isEmailValid as isEmail, isFirstNameValid } from "utils/ValidationUtilities";
import { RegisterResponseMessages } from "./ResponseMessages";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import * as S from "./Authentication.styled";

const Signup = () => {
  const [formData, setFormData] = useState<SignupRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    groupCode: ""
  });
  const [statusMessage, setStatusMessage] = useState<null | string>(null);
  const isFormDataValid = useMemo(
    () => !isFirstNameValid(formData.firstName) || !isFirstNameValid(formData.lastName) || !isEmail(formData.email),
    [formData]
  );

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormDataValid) {
      setStatusMessage(RegisterResponseMessages.Invalid);
      return;
    }

    try {
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
      <S.RegisterWrapper>
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
            <S.Button type="submit" margin="1rem 0 0 0" disabled={isFormDataValid}>
              {"Register"}
            </S.Button>
          </S.Form>
        </S.ContentWrapper>
      </S.RegisterWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Signup;
