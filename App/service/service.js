import axios from 'axios';

const baseUrl = 'https://reqres.in/api';

export function login({ username, password }) {
  return axios.post(baseUrl + '/login', { username, password });
}
