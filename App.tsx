import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation';
import theme from '@/theme';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screen/auth/Login';
import OnBoardingScreen from '@/screen/onBoarding';
import SignUp from '@/screen/auth/SignUp';
import ResetPassword from '@/screen/auth/ResetPassword';
import SettingsScreen from '@/screen/settings';
import { View } from 'react-native';
import IconButtonPaper from '@/components/ui/IconButton';
import RoutingApp from '@/components/shared/BottomNavigation';
import Home from '@/screen/Home';
import ProfileScreen from '@/screen/Profile';
import MyCoursesScreen from '@/screen/myCourses';
import BottomTab from '@/components/shared/BottomTab';
import HomeScreen from '@/screen/Home';
const ButtonRight = () => {
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
const Stack = createNativeStackNavigator();
export default function App() {
  let isLoggedIn = false;
  return (
    <SafeAreaProvider style={styles.container}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
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
            // initialRouteName={isLoggedIn ? 'Home' : 'OnBoarding'}
          >
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name='OnBoarding'
              component={OnBoardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen
              name='ResetPassword'
              component={ResetPassword}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name='RoutingApp'
              component={RoutingApp}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
            {/* <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='MyCourses' component={MyCoursesScreen} /> */}
            <Stack.Screen
              name='Settings'
              component={SettingsScreen}
              options={{ headerRight: () => <ButtonRight /> }}
            />
            {/* <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='MyCourses' component={MyCoursesScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
