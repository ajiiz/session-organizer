import PageInformation from "styled/components/shared/page-info/PageInformation";
import CreationInputs from "styled/components/creation/creation-inputs/CreationInputs";
import { useCreation } from "styled/components/creation/useCreation";
import RowMenu from "styled/components/shared/row-menu/RowMenu";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const CreationMain = () => {
  const {
    selectedOption,
    options,
    formData,
    handleOptionChange,
    handleFormDataChange,
    handleFormSubmit,
    isFormValid,
    handleModal,
    isModalOpen
  } = useCreation();

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Creation Panel"}
          paragraph={
            "Make new events. If you are group administrator - request group exams. Also create events for groups."
          }
        />
        <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={options} />
        <CreationInputs
          selectedOption={selectedOption}
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
          isFormValid={!isFormValid}
          handleModal={handleModal}
          isModalOpen={isModalOpen}
        />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default CreationMain;
