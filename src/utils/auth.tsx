import { jwtDecode } from 'jwt-decode';
import { verify, sign } from 'jsonwebtoken';
import apiInstance from '@/api/api';

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode<{ exp: number }>(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('token', accessToken);
    apiInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('token');
    delete apiInstance.defaults.headers.common.Authorization;
  }
};

export { verify, sign, isValidToken, setSession };
