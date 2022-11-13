import { ChangeEvent } from "react";
import { CustomEventFormData, FormData } from "styled/components/creation/useCreation";
import { isDateValid, isDescriptionValid, isNameValid, isTimeValid } from "utils/ValidationUtilities";
import * as S from "styled/components/shared/row-menu/RowMenu.styled";

export interface InputsProps {
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
  buttonText?: string;
  isFormValid: boolean;
}

const CustomEventInputs = ({ formData, handleFormDataChange, handleFormSubmit, isFormValid }: InputsProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleFormDataChange({ ...formData, [name]: value } as CustomEventFormData);
  };

  return (
    <>
      <S.InputsWrapper>
        <S.InputsContainer margin="0 4rem 0 0">
          <S.InputContainer margin="0 0 1rem 0">
            <S.InputLabel>Name</S.InputLabel>
            <S.Input
              name="name"
              value={(formData as CustomEventFormData)?.name}
              placeholder="Enter event name..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isNameValid((formData as CustomEventFormData)?.name)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Details</S.InputLabel>
            <S.Input
              name="details"
              value={(formData as CustomEventFormData)?.details}
              placeholder="Enter details..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isDescriptionValid((formData as CustomEventFormData)?.details)}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer margin="0 4rem 0 0" isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>Start date</S.InputLabel>
            <S.Input
              name="startDate"
              value={(formData as CustomEventFormData)?.startDate}
              placeholder="DD.MM.YYYY"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isDateValid((formData as CustomEventFormData)?.startDate)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>End date</S.InputLabel>
            <S.Input
              name="endDate"
              value={(formData as CustomEventFormData)?.endDate}
              placeholder="DD.MM.YYYY"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isDateValid((formData as CustomEventFormData)?.endDate)}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>Start time</S.InputLabel>
            <S.Input
              name="startTime"
              value={(formData as CustomEventFormData)?.startTime}
              placeholder="hh:mm"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isTimeValid((formData as CustomEventFormData)?.startTime)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>End time</S.InputLabel>
            <S.Input
              name="endTime"
              value={(formData as CustomEventFormData)?.endTime}
              placeholder="hh:mm"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isTimeValid((formData as CustomEventFormData)?.endTime)}
            />
          </S.InputContainer>
        </S.InputsContainer>
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <S.Button type="button" onClick={handleFormSubmit} disabled={isFormValid}>
          Create Custom Event
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default CustomEventInputs;
