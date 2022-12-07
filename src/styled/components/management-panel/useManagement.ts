import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { getEvents } from "network/events/getEvents";
import { Event } from "@prisma/client";

export type EventsType = Event[];

export interface useCreationProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  isLoading: boolean;
  events: EventsType;
}

const DEFAULT_OPTIONS = ["all", "past", "future"];

export const useManagement = (): useCreationProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("all");
  const [options, setOptions] = useState<string[]>([]);
  const [events, setEvents] = useState<EventsType>([]);
  const isAllEvents = useMemo(() => selectedOption === "all", [selectedOption]);
  const isPastEvents = useMemo(() => selectedOption === "past", [selectedOption]);
  const isFutureEvents = useMemo(() => selectedOption === "future", [selectedOption]);

  const handleGetOptions = async () => {
    setOptions(DEFAULT_OPTIONS);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const fetchEvents = async () => {
    try {
      const data = await getEvents({});
      setEvents(data.events);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // todo: reset events data when option changes
  const resetEventsData = () => {
    setIsLoading(false);
    return;
  };

  // todo: remove selected event
  const handlyRemoveEvent = (eventId: string) => {
    return;
  };

  // todo: modify event
  const handleModifyEvent = (eventId: string) => {
    return;
  };

  useEffect(() => {
    setIsLoading(true);
    resetEventsData();
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
    events
  };
};
