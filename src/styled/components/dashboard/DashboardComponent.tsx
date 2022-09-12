import { signOut, useSession } from "next-auth/react";
import NavigationPanel from "styled/components/navigation-panel/NavigationPanel";
import * as S from "./Dashboard.styled";

const DashboardComponent = () => {
  const session = useSession();

  return (
    <>
      <NavigationPanel />
      <S.Section>Dashboard available!</S.Section>
      {session.data?.user && <button onClick={() => signOut({ callbackUrl: "/signin" })}>Sign out</button>}
    </>
  );
};

export default DashboardComponent;
