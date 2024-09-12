import IconButtonPaper from '@/components/ui/IconButton';
import { useNavigationState } from '@react-navigation/native';
import { View } from 'react-native';

const RightButton = () => {
  const routeName = useNavigationState((state) => state.routes[state.index].name);
  return (
    <View style={{ flexDirection: 'row' }}>
      <IconButtonPaper
        icon='cog'
        variant='md'
        iconColor='sky'
        containerColor={routeName === 'Settings' ? 'cyan' : 'gray'}
        rounded='sm'
        onPress={() => {}}
      />
      <IconButtonPaper
        icon='bell'
        variant='md'
        iconColor='sky'
        containerColor={routeName === 'Notification' ? 'cyan' : 'gray'}
        onPress={() => {}}
      />
    </View>
  );
};
export default RightButton;
