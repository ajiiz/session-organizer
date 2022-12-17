import { getEvents } from "network/events/getEvents";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { EventsType } from "styled/components/management-panel/useManagement";

export interface useFeedProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  handleRequest: (requestId: string, desiredStatus: "inProgress" | "future" | "ended" | "cancelled") => void;
  isLoading: boolean;
  events: EventsType;
}

const DEFAULT_OPTIONS = ["requested", "cancelled"];

export const useFeed = (): useFeedProps => {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTIONS[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [events, setEvents] = useState<EventsType>([]);
  const isRequestEvents = selectedOption === "requested";
  const isCancelledEvents = selectedOption === "cancelled";

  const handleGetOptions = async () => {
    setOptions(DEFAULT_OPTIONS);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const fetchEvents = async () => {
    try {
      const data = await getEvents({});
      filterEvents(data.events);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // todo: handle request status change on yes/no button click
  const handleRequest = async (requestId: string, desiredStatus: "inProgress" | "future" | "ended" | "cancelled") => {
    return;
  };

  const filterEvents = (events: EventsType) => {
    if (isCancelledEvents) {
      setEvents(events.filter(event => event.status === "cancelled"));
    }
    if (isRequestEvents) {
      setEvents(events.filter(event => event.status === "requested"));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchEvents();
  }, [selectedOption]);

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
      fetchEvents();
    }
  }, [status]);

  return {
    selectedOption,
    options,
    handleOptionChange,
    isLoading,
    events,
    handleRequest
  };
};
