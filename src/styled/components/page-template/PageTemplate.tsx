import { useState } from "react";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import NavigationPanel from "styled/components/navigation-panel/NavigationPanel";
import CalendarPanel from "../calendar-panel/CalendarPanel";
import DashboardNavbar from "./page-navbar/DashboardNavbar";
import * as S from "./PageTemplate.styled";

interface PageTemplate {
  children: JSX.Element[] | JSX.Element;
}

const PageTemplate = ({ children }: PageTemplate) => {
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
        {children}
      </S.SectionWrapper>
      <CalendarPanel isOpen={isCallendar} handleOpen={handleCallendarPanel} />
    </Wrapper>
  );
};

export default PageTemplate;
