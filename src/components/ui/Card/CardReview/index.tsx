import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Paragraph, Text } from 'react-native-paper';
import AvatarPaper from '../../Avatar';
import StarRating from 'react-native-star-rating-widget';

interface CardReviewProps {
  name: string;
  reviewText: string;
  initialRating?: number;
  imgURL?: any;
}

const CardReview: React.FC<CardReviewProps> = ({ name, reviewText, imgURL, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <View style={styles.topSection}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AvatarPaper variant='md' href={imgURL} />
            <View style={styles.nameSection}>
              <Text variant='titleMedium' style={{ fontWeight: 700 }}>
                {name}
              </Text>
              <Text style={{ color: '#7E7E7E' }}>Student</Text>
            </View>
          </View>
          <StarRating
            rating={rating}
            onChange={setRating}
            maxStars={5}
            starSize={15}
            color='#0f3975'
            starStyle={{ marginHorizontal: 0 }}
            enableSwiping={false}
            // style={{ position: 'absolute', right: 0, top: 0 }}
          />
        </View>
        <Text variant='bodyMedium'>{reviewText}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginVertical: 10,
    elevation: 3, // Tạo hiệu ứng đổ bóng nhẹ
    borderRadius: 18,
    backgroundColor: '#F4F9FF',
  },
  content: {
    padding: 15,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nameSection: {
    marginLeft: 15,
    // width: '50%',
    flexWrap: 'wrap',
  },
});

export default CardReview;
