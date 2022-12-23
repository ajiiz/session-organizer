import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import EventSection from "styled/components/dashboard/events-section/EventSection";

beforeEach(() => {
  console.error = jest.fn();
});

const mockSession: any = {
  expires: "",
  user: { role: "student", name: "name" }
};

const events = [
  {
    id: "1",
    name: "Event 1",
    description: "Event 1 description",
    startDate: new Date(),
    endDate: new Date(),
    status: "inProgress",
    hasEnded: false,
    userId: null,
    groupId: null
  },
  {
    id: "2",
    name: "Event 2",
    description: "Event 2 description",
    startDate: new Date(),
    endDate: new Date(),
    status: "inProgress",
    hasEnded: false,
    userId: null,
    groupId: null
  }
];

describe("Dashboard page", () => {
  it("renders a dashboard", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <EventSection events={events} />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("Your todays upcoming events")).toBeInTheDocument();
  });

  it("renders proper events", () => {
    render(
      <SessionProvider session={mockSession}>
        <Provider store={store}>
          <EventSection events={events} />
        </Provider>
      </SessionProvider>
    );

    expect(screen.queryByText("Event 1")).toBeInTheDocument();
    expect(screen.queryByText("Event 2")).toBeInTheDocument();
  });
});
