import moment from "moment";

export const getTime = (date: Date): string => {
  return moment(date).format("HH:mm");
};

export const getDateTimeFromString = (date: string, time: string): Date => {
  const dateArray = date.split(".").map(Number);
  const timeArray = time.split(":").map(Number);
  return new Date(dateArray[2], dateArray[1] - 1, dateArray[0], timeArray[0], timeArray[1]);
};
