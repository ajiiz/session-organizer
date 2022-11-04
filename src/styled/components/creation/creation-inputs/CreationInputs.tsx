import { useMemo } from "react";
import { FormData } from "styled/components/creation/useCreation";
import CustomEventInputs from "styled/components/creation/creation-inputs/inputs/CustomEventInputs";
import RequestOrGroupInputs from "styled/components/creation/creation-inputs/inputs/RequestOrGroupInputs";
import GroupInputs from "styled/components/creation/creation-inputs/inputs/GroupInputs";
import Popup from "styled/components/shared/popup/Popup";

type Props = {
  selectedOption: string;
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
  isFormValid: boolean;
};

const CreationInputs = ({ selectedOption, formData, handleFormDataChange, handleFormSubmit, isFormValid }: Props) => {
  const isCustom = useMemo(() => selectedOption === "custom", [selectedOption]);
  const isRequestOrGroupEvent = useMemo(
    () => selectedOption === "request" || selectedOption === "group event",
    [selectedOption]
  );
  const isGroup = useMemo(() => selectedOption === "group", [selectedOption]);
  const isRequest = useMemo(() => selectedOption === "request", [selectedOption]);

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
      <Popup isOpen={true} handleClose={() => {}} />
    </>
  );
};

export default CreationInputs;
