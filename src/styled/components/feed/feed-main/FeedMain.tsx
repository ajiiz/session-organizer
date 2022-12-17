import PageInformation from "styled/components/shared/page-info/PageInformation";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const FeedMain = () => {
  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation header={"Feed & Alerts"} paragraph={"Manage your requests. Accept or deny selected alerts."} />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default FeedMain;
