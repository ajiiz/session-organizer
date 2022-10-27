import CustomInputs from "./inputs/CustomInputs";

type Props = {
  selectedOption: string;
};

const CreationInputs = ({ selectedOption }: Props) => {
  return <>{selectedOption === "custom" && <CustomInputs />}</>;
};

export default CreationInputs;
