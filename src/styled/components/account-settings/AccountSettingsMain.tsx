import PageInformation from "styled/components/shared/page-info/PageInformation";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const AccountSettingsMain = () => {
  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Manage your account"}
          paragraph={"Change your password, email, name and surname. Also you can delete your account."}
        />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default AccountSettingsMain;
