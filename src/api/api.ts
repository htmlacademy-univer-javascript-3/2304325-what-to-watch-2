import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getToken } from './token';


const URL_API = 'https://13.design.pages.academy/wtw/';
const TIMEOUT = 5000;

type ErrorMessage = {
  type: string;
  message: string;
}


const api = axios.create({
  baseURL: URL_API,
  timeout: TIMEOUT,
});

api.interceptors.response.use((response) => response, async (error: AxiosError<ErrorMessage>) => Promise.reject(error));
api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers['x-token'] = token;
  }

  return config;
});


export default api;
