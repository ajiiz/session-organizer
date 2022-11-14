import { getAccount } from "network/users/getAccount";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";

export interface useAccountSettingsProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  handleModal: (value: boolean) => void;
  formData: FormData;
  handleFormDataChange: (data: FormData) => void;
  handleAccountSave: () => void;
  isFormValid: boolean;
  isModalOpen: boolean;
  isAccount: boolean;
}

export type AccountFormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  number: string;
};

export type FormData = AccountFormData | null;

const DEFAULT_OPTIONS = ["account", "group"];
const DEFAULT_ACCOUNT_FORM_DATA = { email: "", firstName: "", lastName: "", password: "defaultPassword", number: "" };

export const useAccountSettings = (): useAccountSettingsProps => {
  const { data: session, status } = useSession();
  const [selectedOption, setSelectedOption] = useState<string>("account");
  const [options, setOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(DEFAULT_ACCOUNT_FORM_DATA);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAccount = useMemo(() => selectedOption === "account", [selectedOption]);
  const isGroup = useMemo(() => selectedOption === "group", [selectedOption]);

  const getOptions = async () => {
    return DEFAULT_OPTIONS;
  };

  const handleGetOptions = async () => {
    const filteredOptions = await getOptions();
    setOptions(filteredOptions);
  };

  const handleGetAccount = async () => {
    const user = session?.user;
    try {
      const data = await getAccount({ userEmail: user?.email ?? "" });
      setFormData({ ...data, password: formData?.password ?? "defaultPassword" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleFormDataChange = (data: FormData) => {
    setFormData(data);
  };

  const handleAccountSave = async () => {
    if (!isFormValid) return;

    if (isAccount) {
      await updateAccount();
    }

    setIsModalOpen(true);
  };

  const updateAccount = async () => {
    try {
      // TODO: update account
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (): boolean => {
    if (isAccount) {
      const { email, firstName, lastName, password, number } = formData as AccountFormData;
      return true;
    }
    return true;
  };

  const handleModal = (value: boolean) => {
    setIsModalOpen(value);
  };

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
      handleGetAccount();
    }
  }, [status]);

  useEffect(() => {
    if (selectedOption === "account") {
      // TODO: fetchAccountDetails();
    }
  }, [selectedOption]);

  useEffect(() => {
    if (validateForm()) {
      setIsFormValid(true);
      return;
    }
    setIsFormValid(false);
  }, [formData]);

  return {
    selectedOption,
    options,
    handleOptionChange,
    handleModal,
    formData,
    handleFormDataChange,
    handleAccountSave,
    isFormValid,
    isModalOpen,
    isAccount
  };
};
