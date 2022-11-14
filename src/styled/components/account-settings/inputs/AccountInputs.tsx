import { ChangeEvent } from "react";
import {
  isDateValid,
  isDescriptionValid,
  isEmailValid,
  isFirstNameValid,
  isNameValid,
  isNumberValid,
  isTimeValid
} from "utils/ValidationUtilities";
import { AccountFormData, FormData } from "styled/components/account-settings/useAccountSettings";
import * as S from "styled/components/shared/row-menu/RowMenu.styled";

export interface InputsProps {
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleAccountSave: () => void;
  buttonText?: string;
  isFormValid: boolean;
}

const AccountInputs = ({ formData, handleFormDataChange, handleAccountSave, isFormValid }: InputsProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleFormDataChange({ ...formData, [name]: value } as AccountFormData);
  };

  return (
    <>
      <S.InputsWrapper>
        <S.InputsContainer margin="0 4rem 0 0">
          <S.InputContainer margin="0 0 1rem 0">
            <S.InputLabel>email</S.InputLabel>
            <S.Input
              name="email"
              value={(formData as AccountFormData)?.email}
              placeholder="Enter email..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isEmailValid((formData as AccountFormData)?.email)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>password</S.InputLabel>
            <S.Input
              name="password"
              value={(formData as AccountFormData)?.password}
              placeholder="Enter password..."
              type="password"
              onChange={event => handleChange(event)}
              disabled={true}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer margin="0 4rem 0 0" isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>first name</S.InputLabel>
            <S.Input
              name="firstName"
              value={(formData as AccountFormData)?.firstName}
              placeholder="Enter name..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isFirstNameValid((formData as AccountFormData)?.firstName)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>last name</S.InputLabel>
            <S.Input
              name="lastName"
              value={(formData as AccountFormData)?.lastName}
              placeholder="Enter surname..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isFirstNameValid((formData as AccountFormData)?.lastName)}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>number</S.InputLabel>
            <S.Input
              name="number"
              value={(formData as AccountFormData)?.number}
              placeholder="Enter number..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isNumberValid((formData as AccountFormData)?.number)}
            />
          </S.InputContainer>
        </S.InputsContainer>
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <S.Button type="button" onClick={handleAccountSave} disabled={isFormValid}>
          Save Account Settings
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default AccountInputs;
