import axios from 'axios';

export const baseURL = 'https://reqres.in/api/';
export const fetchClient = axios.create({
  baseURL,
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const request = (config) => {
  return config;
};
const requestFailed = (error) => {
  return Promise.reject(error);
};
const sccessResponse = (response) => {
  return response;
};
const errorResponse = (error) => {
  return Promise.reject(error);
};

fetchClient.interceptors.request.use(request, requestFailed);
fetchClient.interceptors.response.use(sccessResponse, errorResponse);
