import BottomTab from '@/components/shared/BottomTab';
import RightButton from '@/components/shared/RightButton';
import LoginScreen from '@/screen/auth/Login';
import ResetPassword from '@/screen/auth/ResetPassword';
import SignUp from '@/screen/auth/SignUp';
import DetailScreen from '@/screen/Detail';
import TransactionCompletedScreen from '@/screen/Detail/Completed';
import HomeScreen from '@/screen/Home';
import Lession from '@/screen/Lession';
import MyCoursesScreen from '@/screen/myCourses';
import NotificationScreen from '@/screen/Notification';
import OnBoardingScreen from '@/screen/onBoarding';
import ProfileScreen from '@/screen/Profile';
import SettingsScreen from '@/screen/settings';
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
        <Stack.Screen
          name={ROUTING.BOTTOM_TAB}
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={ROUTING.HOME} component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ROUTING.PROFILE} component={ProfileScreen} />
        <Stack.Screen
          name={ROUTING.LESSION_DETAIL}
          options={{ headerShown: false }}
          component={Lession}
        />
        <Stack.Screen name={ROUTING.MY_COURSE} component={MyCoursesScreen} />
        <Stack.Screen
          name={ROUTING.SETTING}
          component={SettingsScreen}
          options={{ headerRight: () => <RightButton /> }}
        />
        <Stack.Screen
          name={ROUTING.NOTIFICATION}
          component={NotificationScreen}
          options={{
            headerRight: () => <RightButton />,
          }}
        />
        <Stack.Screen name={ROUTING.DETAIL} component={DetailScreen} />
        <Stack.Screen name={ROUTING.TRANSACTION_COMPLETED} component={TransactionCompletedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
