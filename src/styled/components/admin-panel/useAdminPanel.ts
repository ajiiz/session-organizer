import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export interface useAdminPanelProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  isLoading: boolean;
  groups: any[];
  users: any[];
  isGroupsOption: boolean;
  isUsersOption: boolean;
}

const DEFAULT_OPTIONS = ["users", "groups"];

export const useAdminPanel = (): useAdminPanelProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTIONS[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
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

  const fetchUsers = async () => {
    setIsLoading(false);
  };

  const fecthGroups = async () => {};

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
  }, [selectedOption]);

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
      fetchUsers();
    }
  }, [status]);

  return {
    selectedOption,
    options,
    handleOptionChange,
    isLoading,
    groups,
    users,
    isGroupsOption,
    isUsersOption
  };
};
