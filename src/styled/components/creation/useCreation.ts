import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { isGroupAdmin } from "network/users/isGroupAdmin";
import { USER_ROLES } from "utils/Constants";
import { createCustomEvent } from "network/events/createCustomEvent";
import { createRequestAndGroupEvent } from "network/events/createRequestAndGroupEvent";
import { Status } from "utils/EventUtilities";
import { createGroup } from "network/groups/createGroup";
import { generateGroupCode } from "utils/GroupUtilities";
import { isDateValid, isDescriptionValid, isNameValid, isTimeValid } from "utils/ValidationUtilities";

export interface useCreationProps {
  selectedOption: string;
  options: string[];
  formData: FormData;
  handleOptionChange: (option: string) => void;
  handleFormDataChange: (data: FormData) => void;
  handleFormSubmit: () => void;
  isFormValid: boolean;
  isModalOpen: boolean;
  handleModal: (value: boolean) => void;
  isLoading: boolean;
}

export type CustomEventFormData = {
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

export type RequestAndGroupEventFormData = CustomEventFormData & { groupId: string };

export type GroupFormData = {
  name: string;
  details: string;
  groupCode: string;
};

export type FormData = CustomEventFormData | RequestAndGroupEventFormData | GroupFormData | null;

const DEFAULT_OPTIONS = ["custom", "group", "group event", "request"];
const DEFAULT_CUSTOM_FORM_DATA = { name: "", details: "", startDate: "", endDate: "", startTime: "", endTime: "" };
const DEFAULT_REQUEST_AND_GROUP_EVENT_FORM_DATA = { ...DEFAULT_CUSTOM_FORM_DATA, groupId: "" };
const DEFAULT_GROUP_FORM_DATA = { name: "", details: "", groupCode: "" };

export const useCreation = (): useCreationProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("custom");
  const [options, setOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(DEFAULT_CUSTOM_FORM_DATA);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isCustom = selectedOption === "custom";
  const isRequestOrGroupEvent = selectedOption === "request" || selectedOption === "group event";
  const isGroup = selectedOption === "group";

  const getOptions = async () => {
    const userRole = session?.user.role;
    const userEmail = session?.user.email ?? "";
    let groupAdminExist = false;

    try {
      const data = await isGroupAdmin({ userEmail: userEmail });
      groupAdminExist = data.isGroupAdmin;
    } catch (error) {
      console.error(error);
    }

    if (userRole === USER_ROLES.administrator) return DEFAULT_OPTIONS;
    if (userRole === USER_ROLES.examinator) return DEFAULT_OPTIONS.filter(option => option !== "request");
    if (userRole === USER_ROLES.student && groupAdminExist)
      return DEFAULT_OPTIONS.filter(option => option !== "group" && option !== "group event");
    return DEFAULT_OPTIONS.filter(option => option === "custom");
  };

  const handleGetOptions = async () => {
    const filteredOptions = await getOptions();
    setOptions(filteredOptions);
    setIsLoading(false);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleFormDataChange = (data: FormData) => {
    setFormData(data);
  };

  const handleFormSubmit = async () => {
    if (!isFormValid) return;

    setIsLoading(true);

    if (isCustom) {
      await handleCreateCustomEvent();
    }
    if (isRequestOrGroupEvent) {
      await handleCreateRequestAndGroupEvent();
    }
    if (isGroup) {
      await handleCreateGroup();
    }

    setIsModalOpen(true);
    setIsLoading(false);
    resetFormData();
  };

  const handleCreateCustomEvent = async () => {
    try {
      await createCustomEvent(formData as CustomEventFormData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateRequestAndGroupEvent = async () => {
    const status = (selectedOption === "request" ? "request" : "group event") as Status;
    const requestData = { ...formData, statusType: status } as RequestAndGroupEventFormData & { statusType: Status };
    try {
      await createRequestAndGroupEvent(requestData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateGroup = async () => {
    try {
      await createGroup(formData as GroupFormData);
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (): boolean => {
    if (isCustom) {
      const { name, details, startTime, endTime, startDate, endDate } = formData as CustomEventFormData;
      return (
        isNameValid(name) &&
        isDescriptionValid(details) &&
        isDateValid(startDate) &&
        isDateValid(endDate) &&
        isTimeValid(startTime) &&
        isTimeValid(endTime)
      );
    }
    if (isRequestOrGroupEvent) {
      const { name, details, startTime, endTime, startDate, endDate } = formData as RequestAndGroupEventFormData;
      return (
        isNameValid(name) &&
        isDescriptionValid(details) &&
        isDateValid(startDate) &&
        isDateValid(endDate) &&
        isTimeValid(startTime) &&
        isTimeValid(endTime)
      );
    }
    if (isGroup) {
      const { name, details } = formData as GroupFormData;
      return isNameValid(name) && isDescriptionValid(details);
    }

    return false;
  };

  const resetFormData = () => {
    if (selectedOption === "custom") {
      setFormData(DEFAULT_CUSTOM_FORM_DATA);
    }
    if (selectedOption === "group") {
      const groupCode = generateGroupCode();
      setFormData({ ...DEFAULT_GROUP_FORM_DATA, groupCode });
    }
    if (selectedOption === "group event" || selectedOption === "request") {
      setFormData(DEFAULT_REQUEST_AND_GROUP_EVENT_FORM_DATA);
    }
  };

  const handleModal = (value: boolean) => {
    setIsModalOpen(value);
  };

  useEffect(() => {
    resetFormData();
  }, [selectedOption]);

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
    }
  }, [status]);

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
    formData,
    handleOptionChange,
    handleFormDataChange,
    handleFormSubmit,
    isFormValid,
    isModalOpen,
    handleModal,
    isLoading
  };
};
