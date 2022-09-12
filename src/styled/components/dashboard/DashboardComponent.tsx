import { signOut, useSession } from "next-auth/react";
import * as S from "./Dashboard.styled";

const DashboardComponent = () => {
  const session = useSession();

  return (
    <>
      <S.Section>Dashboard available!</S.Section>
      {session.data?.user && <button onClick={() => signOut({ callbackUrl: "/signin" })}>Sign out</button>}
    </>
  );
};

export default DashboardComponent;
