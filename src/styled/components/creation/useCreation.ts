import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { isGroupAdmin } from "network/users/isGroupAdmin";
import { USER_ROLES } from "utils/Constants";

interface useCreationProps {
  selectedOption: string;
  options: string[];
}

const DEFAULT_OPTIONS = ["custom", "group", "group event", "request"];

export const useCreation = (): useCreationProps => {
  const { data: session, status } = useSession();
  const [selectedOption, setSelectedOption] = useState("custom");
  const [options, setOptions] = useState<string[]>([]);

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

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
    }
  }, [status]);

  return {
    selectedOption,
    options
  };
};
