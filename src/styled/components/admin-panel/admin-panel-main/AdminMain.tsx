import PageInformation from "styled/components/shared/page-info/PageInformation";
import RowMenu from "styled/components/shared/row-menu/RowMenu";
import { Loader } from "styled/elements/shared/Loader";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { useAdminPanel } from "../useAdminPanel";
import GroupsInputs from "../admin-inputs/GroupsInputs";
import UserInputs from "../admin-inputs/UserInputs";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const AdminMain = () => {
  const {
    selectedOption,
    options,
    handleOptionChange,
    isLoading,
    handleGroupForemanChange,
    handleUserRoleChange,
    isGroupsOption,
    isUsersOption
  } = useAdminPanel();

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation header={"Admin panel"} paragraph={"Manage groups and users."} />
        <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
        {isLoading ? (
          <Wrapper width={"100%"} height={"10rem"} display={"flex"}>
            <Loader />
          </Wrapper>
        ) : isGroupsOption ? (
          <GroupsInputs handleGroupForemanChange={handleGroupForemanChange} />
        ) : isUsersOption ? (
          <UserInputs handleUserChange={handleUserRoleChange} />
        ) : null}
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default AdminMain;
