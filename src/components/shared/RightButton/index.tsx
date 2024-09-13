import IconButtonPaper from '@/components/ui/IconButton';
import { ROUTING } from '@/utils/constants';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useNavigationState,
} from '@react-navigation/native';
import { View } from 'react-native';

const RightButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const routeName = useNavigationState((state) => state.routes[state.index].name);
  return (
    <View style={{ flexDirection: 'row' }}>
      <IconButtonPaper
        icon='cog'
        variant='md'
        iconColor='sky'
        containerColor={routeName === ROUTING.SETTING ? 'cyan' : 'gray'}
        rounded='sm'
        onPress={() => {
          navigation.navigate(ROUTING.SETTING);
        }}
      />
      <IconButtonPaper
        icon='bell'
        variant='md'
        iconColor='sky'
        containerColor={routeName === ROUTING.NOTIFICATION ? 'cyan' : 'gray'}
        onPress={() => {
          navigation.navigate(ROUTING.NOTIFICATION);
        }}
      />
    </View>
  );
};
export default RightButton;
