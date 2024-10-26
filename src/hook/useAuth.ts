import authService from '@/services/authService';
import useAppStore from '@/store/app';
import useUserStore from '@/store/auth/useUserStore';
import { IAuth } from '@/types/auth.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
  const onLoading = useAppStore((s) => s.onLoading);
  const unLoading = useAppStore((s) => s.unLoading);
  const setUser = useUserStore((s) => s.signup);
  const handleLogin = async ({ email, password }: IAuth) => {
    try {
      onLoading();
      const response = await authService.login({ email, password });
      if (response) {
        AsyncStorage.setItem('tokenList', JSON.stringify(response.tokenList));
        setUser(response.user);
        unLoading();
      }
      return response;
    } catch (error) {
      return error;
    }
  };
  return { handleLogin };
};
