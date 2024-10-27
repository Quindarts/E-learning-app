import CardReview from '@/components/ui/Card/CardReview';
import React from 'react';
import { View } from 'react-native';

function TabReview({ course }: { course: any }) {
  console.log('🚀 ~ TabReview ~ course: ', course);
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: 'white',
      }}
    >
      {[1, 2, 3, 4, 5].map((item, key) => (
        <CardReview
          key={key}
          name='Name Here'
          reviewText='Lorem ipsum dolor sit amet consectetur. Lectus viverra sed aliquam quis enim leo. Turpis nec facilisis placerat dolor ac donec. Odio semper quis rutrum quis '
          initialRating={5}
          imgURL={'/assets/google.png'}
        />
      ))}
    </View>
  );
}

export default TabReview;
