import Cookies from "js-cookie";

export const AUTH_TOKEN = "auth_token";

export const getToken = () => {
  return Cookies.get(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    Cookies.set(AUTH_TOKEN, token, { expires: 7, secure: true });
  }
};

export const removeToken = () => {
  Cookies.remove(AUTH_TOKEN);
};
