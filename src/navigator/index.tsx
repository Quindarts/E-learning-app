import BottomTab from '@/components/shared/BottomTab';
import RightButton from '@/components/shared/RightButton';
import LoginScreen from '@/screen/Auth/Login';
import ResetPassword from '@/screen/Auth/ResetPassword';
import SignUp from '@/screen/Auth/SignUp';
import HomeScreen from '@/screen/Home';
import MyCoursesScreen from '@/screen/MyCourses';
import OnBoardingScreen from '@/screen/OnBoarding';
import ProfileScreen from '@/screen/Profile';
import SettingsScreen from '@/screen/Settings';
import { ROUTING } from '@/utils/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
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
      >
        <Stack.Screen
          name={ROUTING.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTING.ONBOARDING}
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={ROUTING.SIGN_UP} component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen
          name={ROUTING.RESET_PASSWORD}
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTING.HOME} component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTING.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={ROUTING.MY_COURSE} component={MyCoursesScreen} />
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
          options={{ headerRight: () => <RightButton /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
