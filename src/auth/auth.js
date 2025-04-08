// src/utils/auth.js
import axios from "axios";

let token = null;

export const fetchApiToken = async () => {
  if (token) return token;

  const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
    email: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  });

  token = res.data.token;
  return token;
};

export const getAuthHeaders = async () => {
  const currentToken = await fetchApiToken();
  return {
    Authorization: `Bearer ${currentToken}`,
  };
};