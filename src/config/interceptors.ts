import axios from 'axios';
import {LocalStorageKeys} from '../constant/LocalStorageKeys';
import {LocalStorage} from '../utils/LocalStorage';

export const BASEURL = 'http://3.111.187.85/api/';
// export const BASEURL = 'http://192.168.23.7:3001/api/';
// export const BASEURL = 'http://192.168.1.109:3001/api/';

const Api = axios.create({
  baseURL: BASEURL,
});

// Request interceptor for adding the bearer token

Api.interceptors.request.use(
  config => {
    const token = LocalStorage.getString(LocalStorageKeys.AUTH_TOKEN); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    console.log('interceptorError >> ', error);

    return Promise.reject(error);
  },
);

Api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Auth token is not available');
        return Promise.reject(error.response);
      } else {
        return Promise.reject(error.response);
      }
    }
    return Promise.reject(error);
  },
);

export default Api;
