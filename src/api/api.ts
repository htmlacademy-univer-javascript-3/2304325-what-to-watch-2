import axios, { AxiosError } from 'axios';


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

export default api;
