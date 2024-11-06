import useUserStore from '@/store/auth/useUserStore';
import theme from '@/theme';
import { ROUTING } from '@/utils/constants';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, ProgressBar, Text } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';

interface ProjectCardProps {
  name: string;
  author: string;
  initialRating?: number;
  progress: number; // total duration
  imageSource: any; // Adjust type based on your image source
  dimensions?: { width: number; height: number };
  courseId: string;
}
const { width: screenWidth } = Dimensions.get('window');

const CardProjectPaper: React.FC<ProjectCardProps> = ({
  name,
  author,
  progress,
  imageSource,
  initialRating = 0,
  courseId,
}) => {
  const [rating, setRating] = useState(initialRating);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const user = useUserStore((s) => s.user);

  // check course is in my course
  const isMyCourse = user?.currentCourses?.find((c: any) => c?.course?._id === courseId);

  return (
    <Card
      onPress={() =>
        navigation.navigate(ROUTING.LESSION_DETAIL, {
          courseId: courseId,
          isMyCourse: isMyCourse,
        })
      }
      elevation={0}
      style={{ marginTop: 10, width: '48%' }}
    >
      <Card.Cover
        source={imageSource}
        style={{ borderRadius: 10, width: '100%', height: (screenWidth - 70) / 2 }} // trừ padding / 2
      />
      <Card.Content style={{ paddingLeft: 0, paddingRight: 0, marginTop: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              // fontSize: 14,
              fontWeight: 700,
            }}
            variant='labelMedium'
          >
            {name}
          </Text>
          <StarRating
            rating={rating}
            onChange={setRating}
            maxStars={5}
            starSize={14}
            color={theme.colors.primary}
            starStyle={{ marginHorizontal: 0 }}
            enableSwiping={false}
          />
        </View>
        <Text style={{ fontSize: 9, color: '#7E7E7E' }}>By {author}</Text>
        <Text style={{ textAlign: 'right', fontSize: 9, color: '#858383' }}>{progress}% Done</Text>
        <ProgressBar progress={progress / 100} color='#0f3975' />
      </Card.Content>
    </Card>
  );
};

export default CardProjectPaper;
