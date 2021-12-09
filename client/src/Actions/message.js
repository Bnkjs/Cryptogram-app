import apiUrls from "../Types";

export const setMessage = (message) => ({
  type: apiUrls.SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: apiUrls.CLEAR_MESSAGE,
});