export type Status = "in progress" | "future" | "ended";

export const getEventStatus = (startDate: Date, endDate: Date): Status => {
  const currentDate = new Date();
  if (startDate < currentDate && endDate > currentDate) {
    return "in progress";
  }
  if (startDate > currentDate) {
    return "future";
  }
  if (endDate < currentDate) {
    return "ended";
  }
  return "ended";
};

export const areDatesValid = (startDate: Date, endDate: Date): boolean => {
  return startDate < endDate;
};
