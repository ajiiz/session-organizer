import moment from "moment";

export const getTime = (date: Date): string => {
  return moment(date).format("hh:mm");
};
