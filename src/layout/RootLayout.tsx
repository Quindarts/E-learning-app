import RoutingApp from '@/components/shared/BottomNavigation';
import { View, StyleSheet, ScrollView } from 'react-native';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 20,
    // backgroundColor: '#fff',
  },
});
