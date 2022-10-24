import { useEffect, useState } from "react";
import { USER_ROLES } from "utils/Constants";
import PageInformation from "styled/components/shared/page-info/PageInformation";
import { useSession } from "next-auth/react";
import { isGroupAdmin } from "network/users/isGroupAdmin";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const CreationMain = () => {
  const { data: session, status } = useSession();
  const [selectedOption, setSelectedOption] = useState("custom");
  const [options, setOptions] = useState<string[]>([]);

  const getOptions = async () => {
    const options = ["custom", "group", "group event", "request"];
    const userRole = session?.user.role;
    const userEmail = session?.user.email ?? "";
    let groupAdminExist = false;

    try {
      const data = await isGroupAdmin({ userEmail: userEmail });
      groupAdminExist = data.isGroupAdmin;
    } catch (error) {
      console.error(error);
    }

    if (userRole === USER_ROLES.administrator) return options;
    if (userRole === USER_ROLES.examinator) return options.filter(option => option !== "request");
    if (userRole === USER_ROLES.student && groupAdminExist)
      return options.filter(option => option !== "group" && option !== "group event");
    return options.filter(option => option === "custom");
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

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          header={"Creation Panel"}
          paragraph={
            "Make new events. If you are group administrator - request group exams. Also create events for groups."
          }
        />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default CreationMain;
