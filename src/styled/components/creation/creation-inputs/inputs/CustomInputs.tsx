import * as S from "styled/components/creation/creation-inputs/CreationInputs.styled";

const CustomInputs = () => {
  return (
    <S.InputsWrapper>
      <S.InputWrapper>
        <S.InputContainer margin="0 0 1.5rem 0">
          <S.InputLabel>Name</S.InputLabel>
          <S.Input
            name="name"
            placeholder="Enter event name..."
            type="text"
            onChange={event => console.log(event.target.value as string)}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Details</S.InputLabel>
          <S.Input
            name="details"
            placeholder="Enter details..."
            type="text"
            onChange={event => console.log(event.target.value as string)}
          />
        </S.InputContainer>
      </S.InputWrapper>
      <S.InputWrapper margin={"0 0 0 3rem"}>
        <S.InputContainer margin="0 0 1.5rem 0">
          <S.InputLabel>Start date</S.InputLabel>
          <S.Input
            name="startDate"
            placeholder="Enter start date..."
            type="text"
            onChange={event => console.log(event.target.value as string)}
            isSmall={true}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>End date</S.InputLabel>
          <S.Input
            name="endDate"
            placeholder="Enter end date..."
            type="text"
            onChange={event => console.log(event.target.value as string)}
            isSmall={true}
          />
        </S.InputContainer>
      </S.InputWrapper>
      <S.InputWrapper margin={"0 0 0 3rem"}>
        <S.InputContainer margin="0 0 1.5rem 0">
          <S.InputLabel>Start time</S.InputLabel>
          <S.Input
            name="startTime"
            placeholder="Enter start time..."
            type="text"
            onChange={event => console.log(event.target.value as string)}
            isSmall={true}
          />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>End time</S.InputLabel>
          <S.Input
            name="startTime"
            placeholder="Enter start time..."
            type="text"
            onChange={event => console.log(event.target.value as string)}
            isSmall={true}
          />
        </S.InputContainer>
      </S.InputWrapper>
    </S.InputsWrapper>
  );
};

export default CustomInputs;
