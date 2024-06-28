import axios from 'axios';

const API_URL = 'http://localhost:9090/api/users';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/authenticate`, { email, password });
  localStorage.setItem('token', response.data.jwt);
  axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;
};

export const register = async (email: string, password: string, firstName: string, lastName: string) => {
  await axios.post(`${API_URL}/register`, { email, password, firstName, lastName });
};

export const logout = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};