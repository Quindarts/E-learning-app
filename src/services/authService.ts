import axiosConfig from './axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAuth } from '@/types/auth.type';

const login: any = async ({ email, password }: IAuth) => {
  return await axiosConfig.post('/auth/login', {
    email,
    password,
  });
};
const logout = () => {
  AsyncStorage.removeItem('tokenList');
};

const authService = {
  login,
  logout,
};
export default authService;
