import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation';
import theme from '@/theme';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/screen/Home';
import LoginScreen from '@/screen/auth/Login';
import OnBoardingScreen from '@/screen/onBoarding';

const Stack = createNativeStackNavigator();
export default function App() {
  let isLoggedIn = false;
  return (
    <SafeAreaProvider style={styles.container}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'OnBoarding'}>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name='OnBoarding'
              component={OnBoardingScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen name='Home' component={Home} />
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
