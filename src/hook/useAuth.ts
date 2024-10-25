import authService from '@/services/authService';
import useAppStore from '@/store/app';
import useUserStore from '@/store/auth/useUserStore';
import { IAuth } from '@/types/auth.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
<<<<<<< HEAD
  const onLoading = useAppStore(s => s.onLoading)
  const unLoading = useAppStore(s => s.unLoading)
  const setUser = useUserStore(s => s.signup)
=======
  const { onLoading, unLoading } = useAppStore((s) => s);
  const setUser = useUserStore((s) => s.signup);
>>>>>>> 1d77bae0752bbad7c2547f573b2767c39611b6f3
  const handleLogin = async ({ email, password }: IAuth) => {
    try {
      onLoading();
      const response = await authService.login({ email, password });
      if (response && response.tokenList.accessToken) {
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
