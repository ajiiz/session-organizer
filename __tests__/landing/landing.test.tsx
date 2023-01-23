import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Landing from "styled/components/landing/Landing";

beforeEach(() => {
  console.error = jest.fn();
});

const mockSession: any = {
  expires: "",
  user: { role: "student", name: "name" }
};

describe("Home page", () => {
  it("renders a main page", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Landing />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("One workspace.")).toBeInTheDocument();
  });

  it("renders log in button", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Landing />
        </Provider>
      </SessionProvider>
    );

    const loginButton = screen.getByText("Log in");
    expect(loginButton).toBeInTheDocument();
  });

  it("renders register button", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Landing />
        </Provider>
      </SessionProvider>
    );

    const registerButton = screen.getAllByText("Register now")[0];
    expect(registerButton).toBeInTheDocument();
  });
});
