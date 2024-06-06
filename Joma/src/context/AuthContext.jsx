import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  isLoading: false,
  login: () => {},
  logout: () => {},
  isTokenValid: () => false,
});

export const useAuthContext = () => useContext(AuthContext);
