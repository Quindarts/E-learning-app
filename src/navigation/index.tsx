import RoutingApp from '@/components/shared/TabNavigation';
import RootLayout from '@/layout/RootLayout';
import LoginScreen from '@/screen/auth/Login';
import DetailsScreen from '@/screen/DetailsScreen';
import Home from '@/screen/Home';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    Root: {
      screen: LoginScreen,
      options: {
        headerTitle: '',
      },
    },
    Home: {
      screen: Home,
      options: {
        headerTitle: '',
      },
    },
  },
});
const Navigation = createStaticNavigation(RootStack);

export default Navigation;
