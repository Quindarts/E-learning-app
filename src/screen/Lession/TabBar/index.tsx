import theme from '@/theme';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { TabBar } from 'react-native-tab-view';

const TabBarCustom = (props: any) => (
  <TabBar
    {...props}
    style={{ backgroundColor: 'white', padding: 0 }}
    indicatorStyle={{ backgroundColor: 'transparent', padding: 0 }}
    renderLabel={({ route, focused }) => (
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: focused ? theme.colors.primary : 'transparent',
          alignItems: 'center',
          width: 95,
          padding: 0,
          borderRadius: 20,
          paddingHorizontal: 12,
          paddingVertical: 10,
          height: 30,
        }}
      >
        <Text
          variant='bodyLarge'
          style={{
            color: focused ? 'white' : '#000',
            fontWeight: 'bold',
          }}
        >
          {route.title}
        </Text>
      </View>
    )}
  />
);

export default TabBarCustom;
