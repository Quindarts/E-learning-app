import { PaperProvider } from 'react-native-paper';
import RoutingApp from '@/components/shared/BottomNavigation';
import theme from '@/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <RoutingApp />
    </PaperProvider>
  );
}
