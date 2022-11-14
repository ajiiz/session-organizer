export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
};

export const isTimeValid = (time: string): boolean => {
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
};

export const isDateValid = (date: string): boolean => {
  const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
  return dateRegex.test(date);
};

export const isNameValid = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z0-9\s.,]+$/;
  return nameRegex.test(name) && name.length > 4 && name.length < 20;
};

export const isDescriptionValid = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z0-9\s.,;]+$/;
  return nameRegex.test(name) && name.length > 4 && name.length < 50;
};

export const isFirstNameValid = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s,]+$/;
  return nameRegex.test(name) && name.length > 4 && name.length < 30;
};

export const isNumberValid = (number: string): boolean => {
  const numberRegex = /^[0-9]+$/;
  return numberRegex.test(number) && number.length === 9;
};
