import PageInformation from "styled/components/shared/page-info/PageInformation";
import { useCreation } from "../useCreation";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const CreationMain = () => {
  const { selectedOption, options } = useCreation();

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Creation Panel"}
          paragraph={
            "Make new events. If you are group administrator - request group exams. Also create events for groups."
          }
        />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default CreationMain;
