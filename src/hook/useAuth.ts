import SignUp from '@/screen/auth/SignUp';
import { login, register } from '@/services/authService';
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
      const response = await login({ email, password });
      await AsyncStorage.setItem('tokenList', JSON.stringify(response.tokenList));
      setUser(response.user);
      unLoading();
      navigation.navigate('BottomTab');
      return;
    } catch (error) {
      return error;
    }
  };
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate(ROUTING.LOGIN);
  };
  const handleRegister = async ({ firstName, lastName, email, password }: IAuth) => {
    try {
      onLoading();
      const response = await register({ firstName, lastName, email, password });
      await AsyncStorage.setItem('tokenList', JSON.stringify(response.tokenList));
      setUser(response.user);
      unLoading();
      navigation.navigate('BottomTab');
    } catch (error) {
      unLoading();
      return error;
    }
  };
  return { handleLogin, handleLogout, handleRegister };
};
