import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getEvents } from "network/events/getEvents";
import { Event } from "@prisma/client";
import { removeEvent } from "network/events/removeEvent";

export type EventsType = (Event & { isGroupEvent: boolean })[];

export interface useCreationProps {
  selectedOption: string;
  options: string[];
  handleOptionChange: (option: string) => void;
  isLoading: boolean;
  events: EventsType;
  handleRemoveEvent: (eventId: string) => void;
}

const DEFAULT_OPTIONS = ["future", "all", "past"];

export const useManagement = (): useCreationProps => {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(DEFAULT_OPTIONS[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [events, setEvents] = useState<EventsType>([]);
  const isAllEvents = selectedOption === "all";
  const isPastEvents = selectedOption === "past";
  const isFutureEvents = selectedOption === "future";

  const handleGetOptions = async () => {
    setOptions(DEFAULT_OPTIONS);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const fetchEvents = async () => {
    try {
      const data = await getEvents({});
      filterEvents(data.events.filter(event => event.status !== "cancelled" && event.status !== "request"));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveEvent = async (eventId: string) => {
    setIsLoading(true);
    try {
      await removeEvent({ eventId });
      await fetchEvents();
    } catch (error) {
      console.error(error);
    }
  };

  const filterEvents = (events: EventsType) => {
    if (isAllEvents) {
      setEvents(events);
    }
    if (isPastEvents) {
      setEvents(events.filter(event => new Date(event.endDate) < new Date()));
    }
    if (isFutureEvents) {
      setEvents(events.filter(event => new Date(event.startDate) > new Date()));
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
    handleRemoveEvent
  };
};
