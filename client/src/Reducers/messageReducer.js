import types from "../Types/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.SET_MESSAGE:
      return { message: payload };

    case types.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}