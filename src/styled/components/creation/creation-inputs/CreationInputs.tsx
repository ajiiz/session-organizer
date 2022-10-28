import CustomInputs from "styled/components/creation/creation-inputs/inputs/CustomInputs";
import { FormData } from "styled/components/creation/useCreation";

type Props = {
  selectedOption: string;
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
};

const CreationInputs = ({ selectedOption, formData, handleFormDataChange, handleFormSubmit }: Props) => {
  return (
    <>
      {selectedOption === "custom" && (
        <CustomInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

export default CreationInputs;
