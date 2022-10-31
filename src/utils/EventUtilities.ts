type Status = "inProgress" | "requested" | "future" | "ended";

export const getEventStatus = (startDate: Date, endDate: Date): Status => {
  const currentDate = new Date();
  if (startDate > currentDate && endDate > currentDate) {
    return "inProgress";
  }
  if (startDate > currentDate) {
    return "future";
  }
  if (endDate < currentDate) {
    return "ended";
  }
  return "ended";
};
