import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export interface useAdminPanelProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  isLoading: boolean;
  handleGroupForemanChange: (groupId: string, foremanId: string) => Promise<void>;
  isGroupsOption: boolean;
  isUsersOption: boolean;
}

const DEFAULT_OPTIONS = ["users", "groups"];

export const useAdminPanel = (): useAdminPanelProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTIONS[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const isUsersOption = selectedOption === "users";
  const isGroupsOption = selectedOption === "groups";

  const handleGetOptions = async () => {
    if (session?.user?.role === "administrator") {
      setOptions(DEFAULT_OPTIONS);
    } else if (session?.user?.role === "examinator") {
      setOptions(DEFAULT_OPTIONS.filter(option => option !== "users"));
    }
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleGroupForemanChange = async (groupId: string, foremanId: string) => {
    console.log(groupId);
    console.log(foremanId);
  };

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
    }
  }, [status]);

  return {
    selectedOption,
    options,
    handleOptionChange,
    isLoading,
    handleGroupForemanChange,
    isGroupsOption,
    isUsersOption
  };
};
