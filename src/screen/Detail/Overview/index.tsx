import theme from '@/theme';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import PurchaseDetail from '../PurchaseDetail';
const overviewData = {
  name: 'Mobile App UI UX',
  rating: 5,
  time: '7 HRs',
  totalTime: '7 Weeks', // Total duration
  lesson: '100 Lessons', // total lesson
  discount: 0.2,
  trainner: 'Frank Darabont', // author
  totalPrice: 76, // price
};
export default function Overview() {
  const [rating, setRating] = useState(overviewData.rating);

  return (
    <View style={{}}>
      <Text variant='titleLarge' style={{ fontWeight: 'bold', marginVertical: 34 }}>
        Overview
      </Text>
      {/*  */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Text variant='bodyLarge' style={{ fontWeight: 'medium' }}>
          Name Of Lesson:
        </Text>
        <Text variant='titleMedium' style={{ fontWeight: 'bold', flexShrink: 1 }}>
          {overviewData.name}
        </Text>
      </View>
      {/*  */}
      <View
        style={{
          backgroundColor: '#F4F9FF',
          borderRadius: 18,
          borderColor: '#DEDEDE',
          borderWidth: 1,
          flexDirection: 'row',
          // justifyContent: 'space-between',
          padding: 20,
          paddingHorizontal: 26,
          flexWrap: 'wrap',
          gap: 30,
          marginVertical: 34,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            flexBasis: '40%',
          }}
        >
          <MaterialCommunityIcons name='book-multiple' size={24} color={theme.colors.primary} />
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            {overviewData.lesson}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            flexBasis: '40%',
          }}
        >
          <MaterialCommunityIcons name='certificate' size={24} color={theme.colors.primary} />
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            certificate
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            flexBasis: '40%',
          }}
        >
          <MaterialCommunityIcons name='clock-time-eight' size={24} color={theme.colors.primary} />
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            {overviewData.totalTime}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            flexBasis: '40%',
          }}
        >
          <MaterialIcons name='discount' size={24} color={theme.colors.primary} />
          <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
            {overviewData.discount * 100}%
          </Text>
        </View>
      </View>
      {/*  */}
      <View style={{ gap: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text variant='bodyLarge' style={{ fontWeight: 'medium' }}>
            Course Rating:
          </Text>
          <StarRatingDisplay
            rating={rating}
            maxStars={5}
            starSize={14}
            color={theme.colors.primary}
            starStyle={{ marginHorizontal: 0 }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <Text variant='bodyLarge' style={{ fontWeight: 'medium' }}>
            Course Time:
          </Text>
          <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
            {overviewData.time}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text variant='bodyLarge' style={{ fontWeight: 'medium' }}>
            Name Of Trainer:
          </Text>
          <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
            {overviewData.trainner}
          </Text>
        </View>
      </View>
      <PurchaseDetail />
    </View>
  );
}
