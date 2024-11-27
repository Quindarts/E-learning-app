import axiosConfig from './axiosConfig';
import { IAuth } from '@/types/auth.type';

const login: any = async ({ email, password }: IAuth) => {
  return await axiosConfig.post('/auth/login', {
    email,
    password,
  });
};

const register: any = async ({ firstName, lastName, email, password }: IAuth) => {
  return await axiosConfig.post('/auth/register', {
    firstName,
    lastName,
    email,
    password,
  });
};

export { login, register };
