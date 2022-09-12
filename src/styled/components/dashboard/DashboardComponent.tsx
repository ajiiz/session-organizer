import { signOut, useSession } from "next-auth/react";
import NavigationPanel from "styled/components/navigation-panel/NavigationPanel";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import * as S from "./Dashboard.styled";

const DashboardComponent = () => {
  const session = useSession();

  return (
    <Wrapper flexDirection="row" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <NavigationPanel />
      <S.Section>Dashboard available!</S.Section>
      {session.data?.user && <button onClick={() => signOut({ callbackUrl: "/signin" })}>Sign out</button>}
    </Wrapper>
  );
};

export default DashboardComponent;
