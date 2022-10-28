import { ChangeEvent } from "react";
import { CustomEventFormData } from "styled/components/creation/useCreation";
import { InputsProps } from "styled/components/creation/creation-inputs/inputs/CustomEventInputs";
import * as S from "styled/components/creation/creation-inputs/CreationInputs.styled";

const GroupInputs = ({ formData, handleFormDataChange, handleFormSubmit }: InputsProps) => {
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
              placeholder="Enter event name..."
              type="text"
              onChange={event => handleChange(event)}
            />
          </S.InputContainer>
          <S.InputContainer margin="0 0 1rem 0">
            <S.InputLabel>Details</S.InputLabel>
            <S.Input
              name="details"
              placeholder="Enter details..."
              type="text"
              onChange={event => handleChange(event)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Group code</S.InputLabel>
            <S.Input
              name="groupCode"
              placeholder="Enter group code..."
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

export default GroupInputs;
