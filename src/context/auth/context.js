import { createContext, useReducer } from "react";
import { authReducer, initialState } from "./reducer";

export const ERROR = "auth/error";
export const LOGIN = "auth/authenticated";
export const LOGOUT = "auth/logout";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, initialState);

  const setAuthError = () => dispatch({ type: ERROR });

  const login = (user) =>
    dispatch({
      type: LOGIN,
      payload: user,
    });

  const logout = () => dispatch({ type: LOGOUT });

  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return auth?.authenticated || user?.authenticated;
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuthError, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
