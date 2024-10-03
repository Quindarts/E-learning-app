import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const getTokenList = async () => {
  try {
    const data = await AsyncStorage.getItem('tokenList');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error getting token list:', error);
    return [];
  }
};

const getAccessToken = async () => {
  try {
    const tokenList = await getTokenList();
    return tokenList.accessToken || null;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};

const getRefreshToken = async () => {
  try {
    const tokenList = await getTokenList();
    return tokenList.refreshToken || null;
  } catch (error) {
    console.error('Error getting refresh token:', error);
    return null;
  }
};

const setAccessToken = async (accessToken: string) => {
  try {
    const tokenList = await getTokenList();
    await AsyncStorage.setItem('tokenList', JSON.stringify({ ...tokenList, accessToken }));
  } catch (error) {
    console.error('Error setting access token:', error);
  }
};

const setRefreshToken = async (refreshToken: string) => {
  try {
    const tokenList = await getTokenList();
    await AsyncStorage.setItem('tokenList', JSON.stringify({ ...tokenList, refreshToken }));
  } catch (error) {
    console.error('Error setting refresh token:', error);
  }
};
// function convert localhost to ip

const axiosConfig = axios.create({
  baseURL: `http://192.168.1.6:5000`, // phone đâu bik localhost là ip nào
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosConfig.interceptors.response.use(
  (response: any) => {
    return response?.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getRefreshToken();
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
