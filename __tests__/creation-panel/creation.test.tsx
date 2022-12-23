import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import CreationMain from "styled/components/creation/creation-main/CreationMain";
import RowMenu from "styled/components/shared/row-menu/RowMenu";

beforeEach(() => {
  console.error = jest.fn();
});

const mockSession: any = {
  expires: "",
  user: { role: "student", name: "name" }
};

const DEFAULT_OPTIONS = ["custom", "group", "group event", "request"];

describe("Dashboard page", () => {
  it("renders a creation panel", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <CreationMain />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("Creation Panel")).toBeInTheDocument();
  });

  it("renders proper options", () => {
    let selectedOption = DEFAULT_OPTIONS[0];
    const handleOptionChange = (option: string) => {
      selectedOption = option;
    };
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={DEFAULT_OPTIONS} />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("custom")).toBeInTheDocument();
    expect(screen.queryByText("group")).toBeInTheDocument();
  });

  it("changes options properly", () => {
    let selectedOption = DEFAULT_OPTIONS[0];
    const handleOptionChange = (option: string) => {
      selectedOption = option;
    };
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <RowMenu selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={DEFAULT_OPTIONS} />
        </Provider>
      </SessionProvider>
    );

    const groupOption = screen.getByText("group");
    groupOption.click();
    expect(selectedOption).toBe("group");

    const requestOption = screen.getByText("request");
    requestOption.click();
    expect(selectedOption).toBe("request");
  });
});
