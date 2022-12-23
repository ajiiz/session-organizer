import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import Register from "styled/components/authentication/Register";

beforeEach(() => {
  console.error = jest.fn();
});

const mockSession: any = {
  expires: "",
  user: { role: "student", name: "name" }
};

describe("Register page", () => {
  it("renders a register panel", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <Register />
        </Provider>
      </SessionProvider>
    );

    const registerTexts = screen.getAllByText("Register");
    expect(registerTexts[0]).toBeInTheDocument();
  });
});
