import { API_URL } from "../config/globals";

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function fetchProtectedData(token) {
  const response = await fetch(`${API_URL}/protected-endpoint`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch protected data");
  }

  return response.json();
}
