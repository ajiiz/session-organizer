import { ChangeEvent, useEffect, useState } from "react";
import { RequestAndGroupEventFormData } from "styled/components/creation/useCreation";
import { InputsProps } from "styled/components/creation/creation-inputs/inputs/CustomEventInputs";
import Dropdown, { Item } from "styled/components/shared/dropdown/Dropdown";
import { getGroups } from "network/groups/getGroups";
import { isDateValid, isDescriptionValid, isNameValid, isTimeValid } from "utils/ValidationUtilities";
import * as S from "styled/components/shared/row-menu/RowMenu.styled";

const CustomEventInputs = ({
  formData,
  handleFormDataChange,
  handleFormSubmit,
  buttonText,
  isFormValid
}: InputsProps) => {
  const [dropdownOptions, setDropdownOptions] = useState<Item[]>([]);
  const [selectedDropdownOption, setSelectedDropdownOption] = useState({ value: "", label: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleFormDataChange({ ...formData, [name]: value } as RequestAndGroupEventFormData);
  };

  const handleGetGroups = async () => {
    try {
      const data = await getGroups();
      const groups = data.groups.map(group => ({ value: group.id, label: group.name }));
      setDropdownOptions(groups);
      setSelectedDropdownOption(groups[0]);
      handleFormDataChange({ ...formData, groupId: groups[0].value } as RequestAndGroupEventFormData);
    } catch (error) {
      console.error(error);
    }
  };

  const onDropdownChange = (option: Item) => {
    handleFormDataChange({ ...formData, groupId: option.value } as RequestAndGroupEventFormData);
    setSelectedDropdownOption(option);
  };

  useEffect(() => {
    handleGetGroups();
  }, []);

  return (
    <>
      <S.InputsWrapper>
        <S.InputsContainer margin="0 4rem 0 0">
          <S.InputContainer margin="0 0 1rem 0">
            <S.InputLabel>Name</S.InputLabel>
            <S.Input
              name="name"
              value={(formData as RequestAndGroupEventFormData).name}
              placeholder="Enter event name..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isNameValid((formData as RequestAndGroupEventFormData)?.name)}
            />
          </S.InputContainer>
          <S.InputContainer margin="0 0 1rem 0">
            <S.InputLabel>Details</S.InputLabel>
            <S.Input
              name="details"
              value={(formData as RequestAndGroupEventFormData).details}
              placeholder="Enter details..."
              type="text"
              onChange={event => handleChange(event)}
              isValid={isDescriptionValid((formData as RequestAndGroupEventFormData)?.details)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Group</S.InputLabel>
            <Dropdown items={dropdownOptions} onChange={onDropdownChange} selectedItem={selectedDropdownOption} />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer margin="0 4rem 0 0" isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>Start date</S.InputLabel>
            <S.Input
              name="startDate"
              value={(formData as RequestAndGroupEventFormData).startDate}
              placeholder="DD.MM.YYYY"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isDateValid((formData as RequestAndGroupEventFormData)?.startDate)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>End date</S.InputLabel>
            <S.Input
              name="endDate"
              value={(formData as RequestAndGroupEventFormData).endDate}
              placeholder="DD.MM.YYYY"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isDateValid((formData as RequestAndGroupEventFormData)?.endDate)}
            />
          </S.InputContainer>
        </S.InputsContainer>
        <S.InputsContainer isSmall={true}>
          <S.InputContainer margin="0 0 1rem 0" isSmall={true}>
            <S.InputLabel>Start time</S.InputLabel>
            <S.Input
              name="startTime"
              value={(formData as RequestAndGroupEventFormData).startTime}
              placeholder="hh:mm"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isTimeValid((formData as RequestAndGroupEventFormData)?.startTime)}
            />
          </S.InputContainer>
          <S.InputContainer isSmall={true}>
            <S.InputLabel>End time</S.InputLabel>
            <S.Input
              name="endTime"
              value={(formData as RequestAndGroupEventFormData).endTime}
              placeholder="hh:mm"
              type="text"
              onChange={event => handleChange(event)}
              isValid={isTimeValid((formData as RequestAndGroupEventFormData)?.endTime)}
            />
          </S.InputContainer>
        </S.InputsContainer>
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <S.Button type="button" onClick={handleFormSubmit} disabled={isFormValid}>
          {buttonText}
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default CustomEventInputs;
