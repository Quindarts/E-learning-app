import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from '@/theme';
import { StyleSheet, Text } from 'react-native';
import Navigator from '@/navigator';
import useAppStore from '@/store/app';
import LoadingOverlay from '@/components/ui/Loading';

export default function App() {
  const loading = useAppStore((state) => state.globalLoading);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      {loading && <LoadingOverlay />}
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
