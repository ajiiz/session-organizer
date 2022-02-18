import type { NextPage } from "next";
import BlueBackground from "assets/blue-background.jpg";
import Input from "styled/components/shared/Input";
import { HeaderText } from "styled/elements/authentication-page/HeaderText";

const Login: NextPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "40%", height: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "20vh" }}>
          <HeaderText>Sign in to your account</HeaderText>
          <Input text="Email adress" type="text" placeholder="E-mail" value="AAAA" name="email" />
          <Input text="Password" type="password" placeholder="password" value="AAAA" name="password" />
        </div>
      </div>
      <div style={{ display: "flex", width: "60%", height: "100%" }}>
        <img style={{ width: "100%", height: "100%" }} src={BlueBackground.src} alt="blue-background" />
      </div>
    </div>
  );
};

export default Login;
