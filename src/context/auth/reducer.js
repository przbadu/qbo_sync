import * as actionType from "./context";

export const initialState = { authenticated: false, user: null, error: false };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      localStorage.setItem(
        "user",
        JSON.stringify({ ...action.payload, authenticated: true })
      );
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        error: false,
      };
    case actionType.LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        authenticated: false,
        user: null,
        error: false,
      };
    case actionType.ERROR:
      localStorage.removeItem("user");
      return {
        ...state,
        authenticated: false,
        user: null,
        error: true,
      };
    default:
      return state;
  }
};
