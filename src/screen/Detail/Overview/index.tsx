import theme from '@/theme';
import { convertVND } from '@/utils/convertVND';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
// const overviewData = {
//   name: 'Mobile App UI UX',
//   rating: 5,
//   time: '7 HRs',
//   totalTime: '7 Weeks', // Total duration
//   lesson: '100 Lessons', // total lesson
//   discount: 0.2,
//   trainner: 'Frank Darabont', // author
//   totalPrice: 76, // price
// };
// const coupon = 0.2;

export default function Overview({
  course,
  finalPrice,
  selectedCoupon,
}: {
  course: any;
  finalPrice: number;
  selectedCoupon: any;
}) {
  const [rating, setRating] = useState(5);

  const formattedDate = new Date(course.startDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
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
          {/* {overviewData.name} */}
          {course.name}
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
            {/* {overviewData.lesson} */}
            {course.lessons.length} Lessons
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
            {(parseInt(course.totalDuration) / (60 * 60)).toFixed(2)} hours
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
            {/* {overviewData.discount * 100}% */}
            20%
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
            {/* {overviewData.time} */}
            {course.lessons.length} Lessons
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Text variant='bodyLarge' style={{ fontWeight: 'medium' }}>
            Name Of Trainer:
          </Text>
          <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
            {/* {overviewData.trainner} */}
            {course.author}
          </Text>
        </View>
      </View>
      {/* <PurchaseDetail /> */}
      <View>
        <View
          style={{
            marginVertical: 34,
            borderRadius: 18,
            borderColor: '#DEDEDE',
            borderWidth: 1,
            flexDirection: 'row',
            paddingVertical: 20,
            flexWrap: 'wrap',
            paddingHorizontal: 26,
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <Text
            variant='labelLarge'
            style={{
              position: 'absolute',
              top: -12,
              left: 20,
              backgroundColor: '#FFFFFF',
            }}
          >
            Purchase Detail:
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, flexBasis: '40%' }}>
            <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
              Date:
            </Text>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
              {formattedDate}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, flexBasis: '40%' }}>
            <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
              Price:
            </Text>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
              {convertVND(course.price * 22700)}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20 }}>
            <Text variant='bodyMedium' style={{ fontWeight: 'medium' }}>
              Coupon:
            </Text>
            {selectedCoupon ? (
              <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
                Added {selectedCoupon.discount}% discount
              </Text>
            ) : (
              <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}>
                No coupon
              </Text>
            )}
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <Text variant='titleMedium'>Final Price: </Text>
          <Text variant='titleMedium' style={{ fontWeight: 'bold', color: theme.colors.primary }}>
            {convertVND(finalPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
}
