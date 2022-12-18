import PageInformation from "styled/components/shared/page-info/PageInformation";
import RowMenu from "styled/components/shared/row-menu/RowMenu";
import { Loader } from "styled/elements/shared/Loader";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { useFeed } from "../useFeed";
import { FeedTable } from "../feed-table/FeedTable";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const FeedMain = () => {
  const { selectedOption, options, handleOptionChange, isLoading, events, handleRequest } = useFeed();
  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation header={"Feed & Alerts"} paragraph={"Manage your requests. Accept or deny selected alerts."} />
        <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
        {isLoading ? (
          <Wrapper width={"100%"} height={"10rem"} display={"flex"}>
            <Loader />
          </Wrapper>
        ) : (
          <FeedTable events={events} handleRequest={handleRequest} />
        )}
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default FeedMain;
