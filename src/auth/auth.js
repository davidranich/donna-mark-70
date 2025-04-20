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

export const verifyToken = async () => {
  const token = localStorage.getItem('authToken');
  const api = import.meta.env.VITE_API_URL;

  if (!token) {
    return false;
  }
  
  try {
    const response = await axios.get(`${api}/api/auth/verify`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const getAuthHeaders = async (currentToken = null) => {
  let token = !currentToken ? await fetchApiToken() : currentToken;

  return {
    Authorization: `Bearer ${token}`,
  };
};