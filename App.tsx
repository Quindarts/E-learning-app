import { PaperProvider } from 'react-native-paper';
import RoutingApp from '@/components/shared/BottomNavigation';

export default function App() {
  return (
    <PaperProvider>
      <RoutingApp />
    </PaperProvider>
  );
}
