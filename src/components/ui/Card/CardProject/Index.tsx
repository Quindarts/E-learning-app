import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { Card, Title, Paragraph, ProgressBar } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';

interface ProjectCardProps {
  title: string;
  designer: string;
  initialRating?: number;
  progress: number;
  imageSource: any; // Adjust type based on your image source
  dimensions?: { width: number; height: number };
}
const { width: screenWidth } = Dimensions.get('window');

const CardProjectPaper: React.FC<ProjectCardProps> = ({
  title,
  designer,
  progress,
  imageSource,
  initialRating = 0,
}) => {
  const [rating, setRating] = useState(initialRating);
  return (
    <Card elevation={0} style={{ marginVertical: 10, width: '48%' }}>
      <Card.Cover
        // resizeMode='cover' // Điều chỉnh cách hình ảnh được hiển thị
        // resizeMethod='scale' // Điều chỉnh cách hình ảnh được xử lý khi thay đổi kích thước
        source={imageSource}
        style={{ borderRadius: 10, width: '100%', height: (screenWidth - 20) / 2 }} // trừ padding / 2
      />
      <Card.Content style={{ paddingLeft: 0, paddingRight: 0 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Title style={{ fontSize: 14, fontWeight: 700 }}>{title}</Title>
          <StarRating
            rating={rating}
            onChange={setRating}
            maxStars={5}
            starSize={14}
            color='#0f3975'
            starStyle={{ marginHorizontal: 0 }}
            enableSwiping={false}
          />
        </View>
        <Paragraph>By {designer}</Paragraph>

        <Paragraph style={{ textAlign: 'right' }}>{progress}% Done</Paragraph>
        <ProgressBar progress={progress / 100} color='#0f3975' />
      </Card.Content>
    </Card>
  );
};

export default CardProjectPaper;
