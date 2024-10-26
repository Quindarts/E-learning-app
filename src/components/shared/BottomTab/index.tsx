import IconButtonPaper from '@/components/ui/IconButton';
import HomeScreen from '@/screen/Home';
import InBoxSreen from '@/screen/InBox';
import MyCoursesScreen from '@/screen/myCourses';
import ProfileScreen from '@/screen/Profile';
import theme from '@/theme';
import { ROUTING } from '@/utils/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/lib/typescript/react-navigation';

// const BottomTab = createBottomTabNavigator({
//   screens: {
//     Home: HomeScreen,
//     MyCourse: MyCoursesScreen,
//     Profile: ProfileScreen,
//   },
// });
// export default BottomTab;

const Tab = createBottomTabNavigator();

function BottomTab() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
                Welcome{' '}
              </Text>
              <Text variant='titleMedium' style={{ fontWeight: 'bold', color: '#0F3975' }}>
                Ayesha
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <IconButtonPaper
                icon='cog'
                variant='md'
                iconColor='default'
                containerColor='sky'
                rounded='sm'
                onPress={() => {
                  navigation.navigate(ROUTING.SETTING);
                }}
              />
              <IconButtonPaper
                icon='bell'
                variant='md'
                iconColor='sky'
                containerColor='gray'
                onPress={() => {
                  navigation.navigate(ROUTING.NOTIFICATION);
                }}
              />
            </View>
          ),
          tabBarIcon: () => <Icon source={'home'} size={20} color={theme.colors.primary} />,
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon source={'account'} size={20} color={theme.colors.primary} />,
        }}
      />
      <Tab.Screen
        name='Inbox'
        component={InBoxSreen}
        options={{
          tabBarIcon: () => <Icon source={'chat'} size={20} color={theme.colors.primary} />,
        }}
      />
      <Tab.Screen
        name='MyCourses'
        component={MyCoursesScreen}
        options={{
          tabBarIcon: () => <Icon source={'book'} size={20} color={theme.colors.primary} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
