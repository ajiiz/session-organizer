import { ChangeEvent } from "react";
import { CustomEventFormData, FormData } from "styled/components/creation/useCreation";
import * as S from "styled/components/creation/creation-inputs/CreationInputs.styled";

export interface InputsProps {
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
  buttonText?: string;
}

const CustomEventInputs = ({ formData, handleFormDataChange, handleFormSubmit }: InputsProps) => {
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
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer margin="0 4rem 0 0" isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>Start date</S.InputLabel>
            <S.Input
              name="startDate"
              value={(formData as CustomEventFormData)?.startDate}
              placeholder="Enter start date..."
              type="text"
              onChange={event => handleChange(event)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>End date</S.InputLabel>
            <S.Input
              name="endDate"
              value={(formData as CustomEventFormData)?.endDate}
              placeholder="Enter end date..."
              type="text"
              onChange={event => handleChange(event)}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>Start time</S.InputLabel>
            <S.Input
              name="startTime"
              value={(formData as CustomEventFormData)?.startTime}
              placeholder="Enter start time..."
              type="text"
              onChange={event => handleChange(event)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>End time</S.InputLabel>
            <S.Input
              name="endTime"
              value={(formData as CustomEventFormData)?.endTime}
              placeholder="Enter start time..."
              type="text"
              onChange={event => handleChange(event)}
            />
          </S.InputContainer>
        </S.InputsContainer>
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <S.Button type="button" onClick={handleFormSubmit}>
          Create Custom Event
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default CustomEventInputs;
