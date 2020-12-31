import * as actionType from "./context";

export const initialState = { authenticated: false, user: null, error: false };

const persist = (payload) =>
  localStorage.setItem(
    "user",
    JSON.stringify({ ...payload, authenticated: true })
  );

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RENEW_TOKEN:
      const user = {
        "access-token": action.payload["access-token"],
        "token-type": action.payload["token-type"],
        client: action.payload.client,
        expiry: action.payload.expiry,
        uid: action.payload.uid,
      };
      persist(user);

      return {
        ...state,
        authenticated: true,
        user: action.payload,
        error: false,
      };
    case actionType.LOGIN:
      persist(action.payload);;

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
