import type { NextPage } from "next";
import BlueBackground from "assets/blue-background.jpg";

const Login: NextPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "40%", height: "100%" }}></div>
      <div style={{ display: "flex", width: "60%", height: "100%" }}>
        <img style={{ width: "100%", height: "100%" }} src={BlueBackground.src} alt="blue-background" />
      </div>
    </div>
  );
};

export default Login;
