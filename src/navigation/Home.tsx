import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouteNames.HomeStack} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;