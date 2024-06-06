import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
