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
          name={review.userId} // chỗ này tính sau
          reviewText={review.comment}
          initialRating={review.rating}
          imgURL={'/assets/google.png'}
        />
      ))}
    </View>
  );
}

export default TabReview;
