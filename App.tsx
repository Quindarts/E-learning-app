import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from '@/theme';
import { StyleSheet } from 'react-native';
import Navigator from '@/navigator';

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}