import PageInformation from "styled/components/shared/page-info/PageInformation";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";
import RowMenu from "styled/components/shared/row-menu/RowMenu";
import { useFeed } from "../useFeed";

const FeedMain = () => {
  const { selectedOption, options, handleOptionChange, isLoading, events, handleRequest } = useFeed();
  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation header={"Feed & Alerts"} paragraph={"Manage your requests. Accept or deny selected alerts."} />
        <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default FeedMain;
