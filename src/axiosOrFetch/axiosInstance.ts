import axios from 'axios';
import token from '../config';

console.log(token);

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
