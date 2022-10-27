import PageInformation from "styled/components/shared/page-info/PageInformation";
import CreationMenu from "styled/components/creation/creation-menu/CreationMenu";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const CreationMain = () => {
  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Creation Panel"}
          paragraph={
            "Make new events. If you are group administrator - request group exams. Also create events for groups."
          }
        />
        <CreationMenu />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default CreationMain;
