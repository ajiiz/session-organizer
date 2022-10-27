import { ChangeEvent } from "react";
import { CustomEventFormData, FormData } from "styled/components/creation/useCreation";
import * as S from "styled/components/creation/creation-inputs/CreationInputs.styled";

type Props = {
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
};

const CustomInputs = ({ formData, handleFormDataChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleFormDataChange({ ...formData, [name]: value } as CustomEventFormData);
  };

  return (
    <S.InputsWrapper>
      <S.InputsContainer>
        <S.InputContainer margin="0 0 1.5rem 0">
          <S.InputLabel>Name</S.InputLabel>
          <S.Input name="name" placeholder="Enter event name..." type="text" onChange={event => handleChange(event)} />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Details</S.InputLabel>
          <S.Input name="details" placeholder="Enter details..." type="text" onChange={event => handleChange(event)} />
        </S.InputContainer>
      </S.InputsContainer>
      <S.InputsContainer>
        <S.InputContainer margin="0 0 1.5rem 0" isSmall={true}>
          <S.InputLabel>Start date</S.InputLabel>
          <S.Input
            name="startDate"
            placeholder="Enter start date..."
            type="text"
            onChange={event => handleChange(event)}
          />
        </S.InputContainer>
        <S.InputContainer isSmall={true}>
          <S.InputLabel>End date</S.InputLabel>
          <S.Input name="endDate" placeholder="Enter end date..." type="text" onChange={event => handleChange(event)} />
        </S.InputContainer>
      </S.InputsContainer>
      <S.InputsContainer>
        <S.InputContainer margin="0 0 1.5rem 0" isSmall={true}>
          <S.InputLabel>Start time</S.InputLabel>
          <S.Input
            name="startTime"
            placeholder="Enter start time..."
            type="text"
            onChange={event => handleChange(event)}
          />
        </S.InputContainer>
        <S.InputContainer isSmall={true}>
          <S.InputLabel>End time</S.InputLabel>
          <S.Input
            name="startTime"
            placeholder="Enter start time..."
            type="text"
            onChange={event => handleChange(event)}
          />
        </S.InputContainer>
      </S.InputsContainer>
    </S.InputsWrapper>
  );
};

export default CustomInputs;
