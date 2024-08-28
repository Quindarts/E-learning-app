import { PaperProvider } from 'react-native-paper';
import RoutingApp from '@/components/shared/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from '@/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
