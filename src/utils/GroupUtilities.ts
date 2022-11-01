export const generateGroupCode = (): string => {
  const code = "GRP" + Math.random().toString(36).substring(2, 12).toUpperCase();
  return code;
};
