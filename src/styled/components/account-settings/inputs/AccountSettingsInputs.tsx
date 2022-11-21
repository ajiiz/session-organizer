import { FormData } from "styled/components/account-settings/useAccountSettings";
import Modal from "styled/components/shared/modal/Modal";
import AccountInputs from "styled/components/account-settings/inputs/AccountInputs";
import GroupInputs from "styled/components/account-settings/inputs/GroupInputs";

interface Props {
  formData: FormData | null;
  handleFormDataChange: (data: FormData) => void;
  handleAccountSave: () => void;
  isFormValid: boolean;
  isModalOpen: boolean;
  handleModal: (value: boolean) => void;
  isAccount: boolean;
}

const AccuntSettingsInputs = ({
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
      {isAccount ? (
        <AccountInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleAccountSave={handleAccountSave}
          isFormValid={isFormValid}
        />
      ) : (
        <GroupInputs
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleAccountSave={handleAccountSave}
          isFormValid={isFormValid}
        />
      )}
      <Modal isOpen={isModalOpen} handleModal={handleModal} />
    </>
  );
};

export default AccuntSettingsInputs;
