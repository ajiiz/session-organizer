import PageInformation from "styled/components/shared/page-info/PageInformation";
import RowMenu from "styled/components/shared/row-menu/RowMenu";
import AccountSettingsInputs from "styled/components/account-settings/inputs/AccountSettingsInputs";
import { useAccountSettings } from "styled/components/account-settings/useAccountSettings";
import { Loader } from "styled/elements/shared/Loader";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const AccountSettingsMain = () => {
  const {
    selectedOption,
    options,
    handleOptionChange,
    formData,
    handleFormDataChange,
    handleAccountSave,
    isFormValid,
    handleModal,
    isModalOpen,
    isAccount,
    isLoading,
    groups,
    handleJoinGroup,
    handleLeaveGroup
  } = useAccountSettings();

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Manage your account"}
          paragraph={"Change your password, email, name and surname. Also you can delete your account."}
        />
        <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
        {isLoading ? (
          <Wrapper width={"100%"} height={"10rem"} display={"flex"}>
            <Loader />
          </Wrapper>
        ) : (
          <AccountSettingsInputs
            formData={formData}
            handleFormDataChange={handleFormDataChange}
            handleAccountSave={handleAccountSave}
            isFormValid={!isFormValid}
            handleModal={handleModal}
            isModalOpen={isModalOpen}
            isAccount={isAccount}
            handleJoinGroup={handleJoinGroup}
            groups={groups}
            handleLeaveGroup={handleLeaveGroup}
          />
        )}
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default AccountSettingsMain;
