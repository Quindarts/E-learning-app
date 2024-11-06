import authService from '@/services/authService';
import useAppStore from '@/store/app';
import useUserStore from '@/store/auth/useUserStore';
import { IAuth } from '@/types/auth.type';
import { ROUTING } from '@/utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export const useAuth = () => {
  const onLoading = useAppStore((s) => s.onLoading);
  const unLoading = useAppStore((s) => s.unLoading);
  const setUser = useUserStore((s) => s.signup);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const handleLogin = async ({ email, password }: IAuth) => {
    try {
      onLoading();
      const response = await authService.login({ email, password });
      AsyncStorage.setItem('tokenList', JSON.stringify(response.tokenList));
      setUser(response.user);
      unLoading();
      navigation.navigate('BottomTab');
      return response;
    } catch (error) {
      return error;
    }
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('tokenList')
    navigation.navigate(ROUTING.LOGIN);

  };
  return { handleLogin, handleLogout };
};
