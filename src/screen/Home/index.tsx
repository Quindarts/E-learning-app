import RootLayout from '@/layout/RootLayout';
import { View } from 'react-native';
import Header from './Header';
import ContinueWatching from './ContinueWatching';
import TrendingNow from './TrendingNow';

export default function HomeScreen() {
  return (
    <RootLayout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header />
        <ContinueWatching />
        <TrendingNow />
      </View>
    </RootLayout>
  );
}
