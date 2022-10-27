import PageInformation from "styled/components/shared/page-info/PageInformation";
import CreationMenu from "styled/components/creation/creation-menu/CreationMenu";
import CreationInputs from "styled/components/creation/creation-inputs/CreationInputs";
import { useCreation } from "styled/components/creation/useCreation";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const CreationMain = () => {
  const { selectedOption, options, handleOptionChange } = useCreation();

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Creation Panel"}
          paragraph={
            "Make new events. If you are group administrator - request group exams. Also create events for groups."
          }
        />
        <CreationMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
        <CreationInputs selectedOption={selectedOption} />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default CreationMain;
