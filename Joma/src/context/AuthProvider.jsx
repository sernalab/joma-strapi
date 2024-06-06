import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { API_URL } from "../config/globals";
import { getToken, setToken, removeToken } from "../config/helpers";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching logged in user", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const data = await response.json();
      setUser(data.user);
      setToken(data.jwt);
    } catch (error) {
      console.error("Error logging in", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    removeToken();
  };

  const isTokenValid = () => {
    const token = getToken();
    if (!token) return false;

    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  };

  useEffect(() => {
    const token = getToken();
    if (token && isTokenValid()) {
      fetchLoggedInUser(token);
    } else {
      removeToken();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoading, isTokenValid }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
