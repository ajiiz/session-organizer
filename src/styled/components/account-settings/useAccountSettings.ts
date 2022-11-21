import { Group } from "@prisma/client";
import { getGroups } from "network/groups/getGroups";
import { joinGroup } from "network/groups/joinGroup";
import { getAccount } from "network/users/getAccount";
import { updateAccount } from "network/users/updateAccount";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { isEmailValid, isFirstNameValid, isNumberValid } from "utils/ValidationUtilities";

export interface useAccountSettingsProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  handleModal: (value: boolean) => void;
  formData: FormData;
  groups: Group[];
  handleFormDataChange: (data: FormData) => void;
  handleJoinGroup: () => void;
  handleAccountSave: () => void;
  isFormValid: boolean;
  isModalOpen: boolean;
  isAccount: boolean;
  isLoading: boolean;
}

export type AccountFormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  number: string;
};

export type GroupFormData = {
  groupCode: string;
};

export type FormData = AccountFormData | GroupFormData | null;

const DEFAULT_OPTIONS = ["account", "group"];
const DEFAULT_ACCOUNT_FORM_DATA = { email: "", firstName: "", lastName: "", password: "defaultPassword", number: "" };
const DEFAULT_GROUP_FORM_DATA = { groupCode: "" };

export const useAccountSettings = (): useAccountSettingsProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string>("account");
  const [options, setOptions] = useState<typeof DEFAULT_OPTIONS>([]);
  const [formData, setFormData] = useState<FormData>(DEFAULT_ACCOUNT_FORM_DATA);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);
  const isAccount = useMemo(() => selectedOption === "account", [selectedOption]);
  const isGroup = useMemo(() => selectedOption === "group", [selectedOption]);

  const handleGetOptions = async () => {
    setOptions(DEFAULT_OPTIONS);
  };

  const handleGetAccount = async () => {
    setIsLoading(true);
    const loggedUserEmail = session?.user?.email;
    if (!loggedUserEmail) {
      return;
    }

    try {
      const data = await getAccount({ userEmail: loggedUserEmail });
      const newFormData = { ...data, password: (formData as AccountFormData)?.password ?? "defaultPassword" };
      setFormData(newFormData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetGroups = async () => {
    setIsLoading(true);
    const loggedUserEmail = session?.user?.email;
    if (!loggedUserEmail) {
      return;
    }

    try {
      const data = await getGroups();
      setGroups(data.groups);
      setFormData(DEFAULT_GROUP_FORM_DATA);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
      await updateAccountData();
    }

    setIsModalOpen(true);
  };

  const handleJoinGroup = async () => {
    if (!isFormValid) return;

    if (isGroup) {
      await joinSelectedGroup();
      await handleGetGroups();
    }

    setIsModalOpen(true);
  };

  const updateAccountData = async () => {
    setIsLoading(true);
    try {
      await updateAccount(formData as AccountFormData);
      await handleGetAccount();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const joinSelectedGroup = async () => {
    setIsLoading(true);
    try {
      await joinGroup({ groupCode: (formData as GroupFormData).groupCode });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = (): boolean => {
    if (isAccount) {
      const { email, firstName, lastName, number } = formData as AccountFormData;
      return isEmailValid(email) && isFirstNameValid(firstName) && isFirstNameValid(lastName) && isNumberValid(number);
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
    if (isAccount) {
      handleGetAccount();
    }

    if (isGroup) {
      handleGetGroups();
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
    isAccount,
    isLoading,
    groups,
    handleJoinGroup
  };
};
