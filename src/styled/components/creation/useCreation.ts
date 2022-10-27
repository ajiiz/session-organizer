import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { isGroupAdmin } from "network/users/isGroupAdmin";
import { USER_ROLES } from "utils/Constants";

export interface useCreationProps {
  selectedOption: string;
  options: string[];
  formData: FormData;
  handleOptionChange: (option: string) => void;
  handleFormDataChange: (data: FormData) => void;
}

export type CustomEventFormData = {
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};

type RequestAndGroupEventFormData = CustomEventFormData & { groupId: string };

type GroupFormData = {
  name: string;
  details: string;
  groupCode: string;
};

export type FormData = CustomEventFormData | RequestAndGroupEventFormData | GroupFormData | null;

const DEFAULT_OPTIONS = ["custom", "group", "group event", "request"];

export const useCreation = (): useCreationProps => {
  const { data: session, status } = useSession();
  const [selectedOption, setSelectedOption] = useState("custom");
  const [options, setOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>(null);

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
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleFormDataChange = (data: FormData) => {
    setFormData(data);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    setFormData(null);
  }, [selectedOption]);

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
    }
  }, [status]);

  return {
    selectedOption,
    options,
    formData,
    handleOptionChange,
    handleFormDataChange
  };
};
