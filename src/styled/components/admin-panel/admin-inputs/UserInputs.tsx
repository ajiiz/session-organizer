import { useEffect, useState } from "react";
import Dropdown, { Item } from "styled/components/shared/dropdown/Dropdown";
import { getAccounts } from "network/users/getAccounts";
import { GetAccountsResponse } from "../../../../../pages/api/users/getAccounts";
import { UserRole } from "../useAdminPanel";
import * as S from "styled/components/shared/row-menu/RowMenu.styled";

type UserInputsProps = {
  handleUserChange: (userId: string, newRole: UserRole) => void;
};

const UserInputs = ({ handleUserChange }: UserInputsProps) => {
  const [dropdownUserOptions, setDropdownUserOptions] = useState<Item[]>([]);
  const [selectedUserOption, setSelectedUserOption] = useState({ value: "", label: "" });
  const [dropdownRoleOptions, setRoleOptions] = useState<Item[]>([]);
  const [selectedRoleOption, setSelectedRoleOption] = useState({ value: "", label: "" });
  const [allUsers, setAllUsers] = useState<GetAccountsResponse>([]);

  const handleGetUsers = async () => {
    try {
      const data = await getAccounts();
      const users = data.map(user => ({ value: user.id, label: user.email }));
      setAllUsers(data);
      setDropdownUserOptions(users);
      setSelectedUserOption(users[0]);
      const roleOptions = ["student", "examinator", "administrator"].map(role => ({ value: role, label: role }));
      setRoleOptions(roleOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetRole = async () => {
    if (!selectedUserOption.value) return;

    const role = allUsers.filter(user => user.email === selectedUserOption.label)[0].role;
    const roleOption = { value: role, label: role };
    setSelectedRoleOption(roleOption);
  };

  const onGroupDropdownChange = (option: Item) => {
    setSelectedUserOption(option);
  };

  const onForemanDropdownChange = (option: Item) => {
    setSelectedRoleOption(option);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    handleSetRole();
  }, [selectedUserOption]);

  return (
    <>
      <S.InputsWrapper>
        <S.InputsContainer margin="0 4rem 0 0">
          <S.InputContainer>
            <S.InputLabel>Users</S.InputLabel>
            <Dropdown items={dropdownUserOptions} onChange={onGroupDropdownChange} selectedItem={selectedUserOption} />
            <S.InputLabel>User role</S.InputLabel>
            <Dropdown
              items={dropdownRoleOptions}
              onChange={onForemanDropdownChange}
              selectedItem={selectedRoleOption}
            />
          </S.InputContainer>
        </S.InputsContainer>
      </S.InputsWrapper>
      <S.ButtonWrapper>
        <S.Button
          type="button"
          onClick={() => handleUserChange(selectedUserOption.value, selectedRoleOption.value as UserRole)}
        >
          Save
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
};

export default UserInputs;
