import { ChangeEvent } from "react";
import { isGroupCodeValid } from "utils/ValidationUtilities";
import { FormData, GroupFormData } from "styled/components/account-settings/useAccountSettings";
import * as S from "styled/components/shared/row-menu/RowMenu.styled";
import { Group } from "@prisma/client";

export interface InputsProps {
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleJoinGroup: () => void;
  buttonText?: string;
  isFormValid: boolean;
  groups: Group[];
}

const GroupInputs = ({ formData, handleFormDataChange, handleJoinGroup, isFormValid, groups }: InputsProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleFormDataChange({ ...formData, [name]: value } as GroupFormData);
  };

  return (
    <>
      <S.InputsWrapper>
        <S.InputsContainer margin="0 4rem 0 0">
          <S.InputContainer margin="0 0 1rem 0">
            <S.InputLabel>Group code</S.InputLabel>
            <S.Input
              name="groupCode"
              value={(formData as GroupFormData)?.groupCode}
              placeholder="Enter group code..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isGroupCodeValid((formData as GroupFormData)?.groupCode ?? "")}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer isSmall={false} margin="2rem 0 0 0">
          <S.Button type="button" onClick={handleJoinGroup} disabled={isFormValid} width={"100%"} margin={"0"}>
            Join Group
          </S.Button>
        </S.InputsContainer>
      </S.InputsWrapper>
      {groups.map(group => (
        <p key={group.id}>{group.name}</p>
      ))}
    </>
  );
};

export default GroupInputs;
