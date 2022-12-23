import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Login from "styled/components/authentication/Login";

beforeEach(() => {
  console.error = jest.fn();
});

const mockSession: any = {
  expires: "",
  user: { role: "student", name: "name" }
};

describe("Login page", () => {
  it("renders a login panel", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Login csrfToken="" />
        </Provider>
      </SessionProvider>
    );

    const header = screen.getByText("Log in");
    expect(header).toBeInTheDocument();
  });

  it("submit button is disabled when wrong email is provided", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Login csrfToken="" />
        </Provider>
      </SessionProvider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email address...");
    emailInput.innerHTML = "notanemail.com";

    const submitButton = screen.getByText("Continue with your email");
    expect(submitButton).toHaveAttribute("disabled");
  });

  it("submit button is enabled when valid email is provided", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Login csrfToken="" />
        </Provider>
      </SessionProvider>
    );

    const emailInput = screen.getByPlaceholderText("Enter your email address...");
    emailInput.innerHTML = "goodemail@gmail.com";

    const submitButton = screen.getByText("Continue with your email");
    expect(submitButton.getAttribute("disabled")).toBe("");
  });
});
