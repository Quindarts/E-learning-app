import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation';
import theme from '@/theme';
import { StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
