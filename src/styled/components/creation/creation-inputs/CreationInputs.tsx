import { useMemo } from "react";
import { FormData } from "styled/components/creation/useCreation";
import CustomEventInputs from "styled/components/creation/creation-inputs/inputs/CustomEventInputs";
import RequestOrGroupInputs from "styled/components/creation/creation-inputs/inputs/RequestOrGroupInputs";
import GroupInputs from "styled/components/creation/creation-inputs/inputs/GroupInputs";

type Props = {
  selectedOption: string;
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
};

const CreationInputs = ({ selectedOption, formData, handleFormDataChange, handleFormSubmit }: Props) => {
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
        />
      )}
      {isRequestOrGroupEvent && (
        <RequestOrGroupInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
          buttonText={isRequest ? "Request Event" : "Create Group Event"}
        />
      )}
      {isGroup && (
        <GroupInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

export default CreationInputs;
