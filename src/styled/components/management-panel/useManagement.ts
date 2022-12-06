import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { getEvents } from "network/events/getEvents";
import { Event } from "@prisma/client";

type EventType = null | Event[];

export interface useCreationProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  isLoading: boolean;
  events: EventType;
}

const DEFAULT_OPTIONS = ["all", "past", "future"];

export const useManagement = (): useCreationProps => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("all");
  const [options, setOptions] = useState<string[]>([]);
  const [events, setEvents] = useState<EventType>(null);
  const isAllEvents = useMemo(() => selectedOption === "all", [selectedOption]);
  const isPastEvents = useMemo(() => selectedOption === "past", [selectedOption]);
  const isFutureEvents = useMemo(() => selectedOption === "future", [selectedOption]);

  const handleGetOptions = async () => {
    setOptions(DEFAULT_OPTIONS);
    setIsLoading(false);
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
    }
  };

  // todo: reset events data when option changes
  const resetEventsData = () => {
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
    fetchEvents();
  }, []);

  useEffect(() => {
    resetEventsData();
  }, [selectedOption]);

  useEffect(() => {
    if (status !== "loading") {
      handleGetOptions();
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
