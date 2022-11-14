import { FormData } from "styled/components/account-settings/useAccountSettings";
import Modal from "styled/components/shared/modal/Modal";

interface Props {
  selectedOption: string;
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleAccountSave: () => void;
  isFormValid: boolean;
  isModalOpen: boolean;
  handleModal: (value: boolean) => void;
  isAccount: boolean;
}

const AccuntSettingsInputs = ({
  selectedOption,
  formData,
  handleFormDataChange,
  handleAccountSave,
  isFormValid,
  isModalOpen,
  handleModal,
  isAccount
}: Props) => {
  return (
    <>
      {isAccount ? <p>Account</p> : <p>Not account</p>}
      <Modal isOpen={isModalOpen} handleModal={handleModal} />
    </>
  );
};

export default AccuntSettingsInputs;
