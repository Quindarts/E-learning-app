import CardReview from '@/components/ui/Card/CardReview';
import React from 'react';
import { View } from 'react-native';

function TabReview({ reviews }: { reviews: any }) {
  // console.log('🚀 ~ TabReview ~ course: ', course);
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: 'white',
      }}
    >
      {reviews.map((review: any, key: number) => (
        <CardReview
          key={key}
          name={review?.user?.name} 
          reviewText={review?.comment}
          initialRating={review?.rating}
          imgURL={review?.user?.avatar}
        />
      ))}
    </View>
  );
}

export default TabReview;
