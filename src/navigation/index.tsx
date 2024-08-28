import RoutingApp from '@/components/shared/BottomNavigation';
import RootLayout from '@/layout/RootLayout';
import DetailsScreen from '@/screen/DetailsScreen';
import Home from '@/screen/Home';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    // Home: Home,
    // Details: DetailsScreen,
    Root: {
      screen: RoutingApp,
      options: {
        headerTitle: '',
      },
    },
  },
  // layout: ({ children }) => <RootLayout>{children}</RootLayout>,
});
const Navigation = createStaticNavigation(RootStack);

export default Navigation;
