import { useEffect, useState } from "react";
import Dropdown, { Item } from "styled/components/shared/dropdown/Dropdown";
import { getGroups } from "network/groups/getGroups";
import { getGroup } from "network/groups/getGroup";
import * as S from "styled/components/shared/row-menu/RowMenu.styled";

type CustomEventInputsProps = {
  handleGroupForemanChange: (groupId: string, foremanId: string) => void;
};

const CustomEventInputs = ({ handleGroupForemanChange }: CustomEventInputsProps) => {
  const [dropdownGroupOptions, setDropdownGroupOptions] = useState<Item[]>([]);
  const [selectedGroupOption, setSelectedGroupOption] = useState({ value: "", label: "" });
  const [dropdownForemanOptions, setDropdownForremanOptions] = useState<Item[]>([]);
  const [selectedForemanOption, setSelectedForemanOption] = useState({ value: "", label: "" });

  const handleGetGroups = async () => {
    try {
      const data = await getGroups();
      const groups = data.groups.map(group => ({ value: group.id, label: group.name }));
      setDropdownGroupOptions(groups);
      setSelectedGroupOption(groups[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetSelectedGroup = async () => {
    if (!selectedGroupOption.value) return;

    try {
      const data = await getGroup({ groupId: selectedGroupOption.value });
      const foreman = data.foreman;
      const users = data.users;
      if (foreman) {
        const foremanOption = { value: foreman.id, label: foreman.email };
        setSelectedForemanOption(foremanOption);
      } else {
        setSelectedForemanOption({ value: "", label: "" });
      }
      const usersOptions = users.map(user => ({ value: user.id, label: user.email }));
      setDropdownForremanOptions(usersOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const onGroupDropdownChange = (option: Item) => {
    setSelectedGroupOption(option);
  };

  const onForemanDropdownChange = (option: Item) => {
    setSelectedForemanOption(option);
  };

  useEffect(() => {
    handleGetGroups();
  }, []);

  useEffect(() => {
    handleGetSelectedGroup();
  }, [selectedGroupOption]);

  return (
    <>
      <S.InputsWrapper>
        <S.InputsContainer margin="0 4rem 0 0">
          <S.InputContainer>
            <S.InputLabel>Groups</S.InputLabel>
            <Dropdown
              items={dropdownGroupOptions}
              onChange={onGroupDropdownChange}
              selectedItem={selectedGroupOption}
            />
            <S.InputLabel>Group foreman</S.InputLabel>
            <Dropdown
              items={dropdownForemanOptions}
              onChange={onForemanDropdownChange}
              selectedItem={selectedForemanOption}
            />
          </S.InputContainer>
        </S.InputsContainer>
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <S.Button
          type="button"
          onClick={() => handleGroupForemanChange(selectedGroupOption.value, selectedForemanOption.value)}
        >
          Save
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default CustomEventInputs;
