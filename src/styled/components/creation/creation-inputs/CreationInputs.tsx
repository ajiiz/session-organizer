import { useMemo } from "react";
import { FormData } from "styled/components/creation/useCreation";
import CustomEventInputs from "styled/components/creation/creation-inputs/inputs/CustomEventInputs";
import RequestOrGroupInputs from "styled/components/creation/creation-inputs/inputs/RequestOrGroupInputs";
import GroupInputs from "styled/components/creation/creation-inputs/inputs/GroupInputs";
import Modal from "styled/components/shared/modal/Modal";

interface Props {
  selectedOption: string;
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
  isFormValid: boolean;
  isModalOpen: boolean;
  handleModal: (value: boolean) => void;
}

const CreationInputs = ({
  selectedOption,
  formData,
  handleFormDataChange,
  handleFormSubmit,
  isFormValid,
  isModalOpen,
  handleModal
}: Props) => {
  const isCustom = selectedOption === "custom";
  const isRequestOrGroupEvent = selectedOption === "request" || selectedOption === "group event";
  const isGroup = selectedOption === "group";
  const isRequest = selectedOption === "request";

  return (
    <>
      {isCustom && (
        <CustomEventInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
          isFormValid={isFormValid}
        />
      )}
      {isRequestOrGroupEvent && (
        <RequestOrGroupInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
          buttonText={isRequest ? "Request Event" : "Create Group Event"}
          isFormValid={isFormValid}
        />
      )}
      {isGroup && (
        <GroupInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
          isFormValid={isFormValid}
        />
      )}
      <Modal isOpen={isModalOpen} handleModal={handleModal} />
    </>
  );
};

export default CreationInputs;
