import RootLayout from '@/layout/RootLayout';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

function Home() {
  return (
    <RootLayout>
      <View>
        <Text>Hello world</Text>
      </View>
    </RootLayout>
  );
}

export default Home;
