import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: ``,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosConfig.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error.response.data);
  },
);
export default axiosConfig;
