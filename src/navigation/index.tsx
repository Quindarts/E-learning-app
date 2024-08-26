import DetailsScreen from '@/screen/DetailsScreen';
import Home from '@/screen/Home';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Details: DetailsScreen,
  },
});
const Navigation = createStaticNavigation(RootStack);

export default Navigation;
