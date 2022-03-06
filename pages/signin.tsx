import type { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken } from "next-auth/react";
import Input from "src/styled/components/shared/Input";
import { HeaderText } from "src/styled/elements/authentication-page/HeaderText";
import BlueBackground from "assets/blue-background.jpg";

interface SigninProps {
  csrfToken: string | undefined;
}

const signIn: NextPage<SigninProps> = ({ csrfToken }) => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "40%", height: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "20vh" }}>
          <HeaderText>Sign in to your account</HeaderText>
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Input text="Email adress" type="text" placeholder="E-mail" value={"ajiiz@gmail.com"} name="email" />
            <Input text="Password" type="password" placeholder="password" value={"password"} name="password" />
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", width: "60%", height: "100%" }}>
        <img style={{ width: "100%", height: "100%" }} src={BlueBackground.src} alt="blue-background" />
      </div>
    </div>
  );
};

export default signIn;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  };
};
