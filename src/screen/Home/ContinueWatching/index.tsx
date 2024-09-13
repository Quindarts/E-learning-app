import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

function ContinueWatching() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
          Continue Watching
        </Text>
        <Text variant='bodyMedium'>View all</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <CardProjectPaper
          lessionId={'1'}
          imageSource={{ uri: 'https://picsum.photos/700' }}
          title='Project Title'
          creater='Designer Name'
          initialRating={3}
          progress={50}
        />
        <CardProjectPaper
          lessionId={'1'}
          imageSource={{ uri: 'https://picsum.photos/700' }}
          title='Project Title'
          creater='Designer Name'
          initialRating={3}
          progress={80}
        />
      </View>
    </View>
  );
}

export default ContinueWatching;
