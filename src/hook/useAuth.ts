import authService from '@/services/authService';
import { IAuth } from '@/types/auth.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

// excute client side - be side (nơi lưu vào redux, )
export const useAuth = () => {
  const handleLogin = async ({ email, password }: IAuth) => {
    try {
      const response = await authService.login({ email, password });
      // console.log('schema respone', response);
      // if (response && response.tokenList.accessToken) {
      //   console.log('token', response.token);
      //   AsyncStorage.setItem('tokenList', response.tokenList);
      // }
      // console.log('response', response);
      return response;
    } catch (error) {
      return error;
    }
  };
  return { handleLogin };
};
