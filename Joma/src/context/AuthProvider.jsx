import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { getToken, setToken, removeToken } from "../config/auth";
import { API_URL, BEARER } from "../config/globals";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/users/me?populate=*`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();
      console.log("User data:", data);
      setUser({ ...data, role: data.role?.name });
    } catch (error) {
      console.error("Error fetching logged in user on refresh:", error);
      removeToken();
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
      setToken(data.jwt);
      await fetchLoggedInUser(data.jwt);
    } catch (error) {
      console.error("Error logging in:", error);
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

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1000 > Date.now();
    } catch (error) {
      console.error("Invalid token:", error);
      return false;
    }
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
