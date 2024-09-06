import axiosConfig from './axiosConfig';
import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthResponse extends AxiosResponse {
  token: string;
}
const login = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const response = await axiosConfig.post('/login', {
      email,
      password,
    });
    // console.log('schema respone', response);
    if (response && response.token) {
      // console.log('token', response.token);
      AsyncStorage.setItem('accessToken', response.token);
    }
    // AsyncStorage.getItem('accessToken').then((res) => console.log(res));
    return response;
  } catch (error) {
    return error;
  }
};
const logout = () => {
  AsyncStorage.removeItem('accessToken');
};

const authService = {
  login,
  logout,
};
export default authService;
