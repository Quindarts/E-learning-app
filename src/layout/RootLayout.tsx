import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
