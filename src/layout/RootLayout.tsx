import RoutingApp from '@/components/shared/BottomNavigation';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
