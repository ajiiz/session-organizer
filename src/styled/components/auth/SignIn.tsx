import { ChangeEvent, useState } from "react";
import BlueBackground from "assets/blue-background.png";
import Input from "src/styled/components/shared/Input";
import { HeaderText } from "src/styled/elements/authentication-page/HeaderText";
import { ProjectImage } from "src/styled/components/shared/Image";

interface SignInProps {
  csrfToken: string | undefined;
}

export const SignIn = ({ csrfToken }: SignInProps) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "40%", height: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "20vh" }}>
          <HeaderText>Sign in to your account</HeaderText>
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Input text="Email adress" type="text" placeholder="E-mail" value={formData.email} name="email" handleChange={handleChange} />
            <Input text="Password" type="password" placeholder="Password" value={formData.password} name="password" handleChange={handleChange} />
            <button type="submit">Sign in</button>
          </form>
        </div>
      </div>
      <div style={{ display: "flex", width: "60%", height: "100%" }}>
        <ProjectImage src={BlueBackground} alt="blue-background" placeholder="blur" />
      </div>
    </div>
  );
};
