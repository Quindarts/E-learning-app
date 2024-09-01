import { View } from 'react-native';
import { Card, CardProps, Paragraph, ProgressBar, Title } from 'react-native-paper';

interface CourseCardProps {
  title: string;
  designer: string;
  progress: number;
  imageSource: any; // Adjust type based on your image source
}

const CourseCardPaper: React.FC<CourseCardProps> = ({ title, designer, progress, imageSource }) => {
  return (
    <Card
      elevation={2}
      style={{
        marginVertical: 10,
        width: '100%',
        backgroundColor: '#F4F9FF',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, padding: 10 }}>
        <Card.Cover
          source={imageSource}
          resizeMode='cover'
          style={{ borderRadius: 10, flex: 3, height: 'auto' }}
        />
        <Card.Content style={{ paddingLeft: 0, paddingRight: 0, flex: 7 }}>
          <Title style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{title}</Title>
          <Paragraph style={{ fontSize: 12, marginTop: 0 }}>By {designer}</Paragraph>
          <Paragraph style={{ textAlign: 'right' }}>{progress}% Done</Paragraph>
          <ProgressBar progress={progress / 100} color='#0f3975' />
        </Card.Content>
      </View>
    </Card>
  );
};
export default CourseCardPaper;
