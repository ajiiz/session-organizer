import { updateGroup } from "network/groups/updateGroup";
import { updateAccountRole } from "network/users/updateAccountRole";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export type UserRole = "student" | "examinator" | "administrator";

export interface useAdminPanelProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  isLoading: boolean;
  handleGroupForemanChange: (groupId: string, foremanId: string) => Promise<void>;
  handleUserRoleChange: (userId: string, role: UserRole) => Promise<void>;
  isGroupsOption: boolean;
  isUsersOption: boolean;
}

const DEFAULT_OPTIONS = ["users", "groups"];

export const useAdminPanel = (): useAdminPanelProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTIONS[0]);
  const [options, setOptions] = useState<string[]>([]);
  const isUsersOption = selectedOption === "users";
  const isGroupsOption = selectedOption === "groups";

  const handleGetOptions = async () => {
    if (session?.user?.role === "administrator") {
      setOptions(DEFAULT_OPTIONS);
    } else if (session?.user?.role === "examinator") {
      setOptions(DEFAULT_OPTIONS.filter(option => option !== "users"));
      setSelectedOption(DEFAULT_OPTIONS[1]);
    }
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleGroupForemanChange = async (groupId: string, foremanId: string) => {
    setIsLoading(true);
    try {
      await updateGroup({ groupId, foremanId });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserRoleChange = async (userId: string, role: UserRole) => {
    setIsLoading(true);
    try {
      await updateAccountRole({ userId, role });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
    handleUserRoleChange,
    isGroupsOption,
    isUsersOption
  };
};
