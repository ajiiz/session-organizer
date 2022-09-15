import { useState } from "react";
import NavigationPanel from "styled/components/navigation-panel/NavigationPanel";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import DashboardMain from "./dashboard-main/DashboardMain";
import DashboardNavbar from "./dashboard-navbar/DashboardNavbar";
import * as S from "./Dashboard.styled";

const DashboardComponent = () => {
  const [isControlPanel, setIsControlPanel] = useState(false);
  const [isCallendar, setIsCallendar] = useState(false);

  const handleNavigationPanel = (state?: boolean) => {
    if (state) {
      setIsControlPanel(state);
    } else {
      setIsControlPanel(!isControlPanel);
    }

    setIsCallendar(false);
  };
  const handleCallendarPanel = (state?: boolean) => {
    if (state) {
      setIsCallendar(state);
    } else {
      setIsCallendar(!isCallendar);
    }
    setIsControlPanel(false);
  };

  return (
    <Wrapper flexDirection="row" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <NavigationPanel isOpen={isControlPanel} handleOpen={handleNavigationPanel} />
      <S.SectionWrapper>
        <DashboardNavbar handleNavigationPanel={handleNavigationPanel} handleCallendarPanel={handleCallendarPanel} />
        <DashboardMain />
      </S.SectionWrapper>
    </Wrapper>
  );
};

export default DashboardComponent;
