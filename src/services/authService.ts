import axiosConfig from './axiosConfig';
import { IAuth } from '@/types/auth.type';

const login: any = async ({ email, password }: IAuth) => {
  return await axiosConfig.post('/auth/login', {
    email,
    password,
  });
};


const authService = {
  login,
};
export default authService;
