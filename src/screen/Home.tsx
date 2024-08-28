import theme from '@/theme';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

function Home() {
  return (
    <View style={{ marginLeft: 4 }}>
      <Text>Component page</Text>
      <Text>primary button</Text>
      <Button mode='contained' onPress={() => {}}>
        Button contained
      </Button>
      <Button mode='text' onPress={() => {}}>
        Button text
      </Button>
      <Button mode='outlined' onPress={() => {}}>
        Button outlined
      </Button>
      <Button mode='elevated' onPress={() => {}}>
        Button elevated
      </Button>
      <Button disabled mode='contained-tonal'>
        Button disabled contained-tonal
      </Button>
      <Text>
        default text Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic optio enim
        officia temporibus corrupti repudiandae dolor commodi delectus, incidunt, fugiat deserunt!
        Fugiat maiores tenetur harum officiis perferendis, repudiandae sed.
      </Text>
      <Text variant='bodyLarge'>bodyLarge text</Text>
      <Text variant='bodyMedium'>bodyMedium text</Text>
      <Text variant='bodySmall'>bodySmall text</Text>
      <Text variant='displayLarge'>displayLarge text</Text>
      <Text variant='displayMedium'>displayMedium text</Text>
      <Text variant='displaySmall'>displaySmall text</Text>
      <Text variant='headlineLarge'>headlineLarge text</Text>
    </View>
  );
}

export default Home;
