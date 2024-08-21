export const handleApiError = (error: any, message: string) => {
  console.error(`${message}:`, error);
  alert(message);
};
