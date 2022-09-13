import NavigationPanel from "styled/components/navigation-panel/NavigationPanel";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import * as S from "./Dashboard.styled";

const DashboardComponent = () => {
  return (
    <Wrapper flexDirection="row" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <NavigationPanel />
      <S.Section>Dashboard available!</S.Section>
    </Wrapper>
  );
};

export default DashboardComponent;
