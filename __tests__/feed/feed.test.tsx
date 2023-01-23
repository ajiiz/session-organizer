import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import FeedMain from "styled/components/feed/feed-main/FeedMain";
import RowMenu from "styled/components/shared/row-menu/RowMenu";

beforeEach(() => {
  console.error = jest.fn();
});

const mockSession: any = {
  expires: "",
  user: { role: "student", name: "name" }
};

const DEFAULT_OPTIONS = ["Requested", "Cancelled"];

describe("Feed & alerts page", () => {
  it("renders a feed page", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <FeedMain />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("Feed & Alerts")).toBeInTheDocument();
  });

  it("renders proper menu options", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <RowMenu selectedOption={DEFAULT_OPTIONS[0]} handleOptionChange={() => {}} options={DEFAULT_OPTIONS} />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("Requested")).toBeInTheDocument();
    expect(screen.queryByText("Cancelled")).toBeInTheDocument();
  });
});
