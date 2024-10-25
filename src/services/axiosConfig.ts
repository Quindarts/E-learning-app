import axios from 'axios';
import TokenService from '@/utils/token';

const axiosConfig = axios.create({
  baseURL: `http://192.168.1.104:5000`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConfig.interceptors.request.use(
  // async (config) => {
  //   const accessToken = await TokenService.getAccessToken();
  //   if (accessToken) {
  //     config.headers.Authorization = `Bearer ${accessToken}`;
  //   }
  //   return config;
  // },
  // (error) => {
  //   return Promise.reject(error);
  // },
);

axiosConfig.interceptors.response.use(
  (response: any) => {
    return response?.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await TokenService.getRefreshToken();
      if (refreshToken) {
        // try {
        //   const response = await axiosConfig.post('/refreshToken', {
        //     refreshToken,
        //   });
        //   const newAccessToken = response?.data?.accessToken; // chờ viết api xem trả về như thế nào
        //   setAccessToken(newAccessToken);
        //   return axiosConfig(originalRequest);
        // } catch (error) {
        //   console.error('Error refreshing token:', error);
        //   return Promise.reject(error);
        // }
      }
    }
    return Promise.reject(error?.response?.data);
  },
);
export default axiosConfig;
