import theme from '@/theme';
import { TouchableOpacity, View } from 'react-native';
import { Text, Card, CardProps, Paragraph, ProgressBar, Title } from 'react-native-paper';

interface CourseCardProps {
  title: string;
  creater: string;
  progress: number;
  imageSource: any; // Adjust type based on your image source
}

const CourseCardPaper: React.FC<CourseCardProps> = ({ title, creater, progress, imageSource }) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#F4F9FF',
        borderRadius: 8,
        elevation: 2, // Tạo hiệu ứng đổ bóng nhẹ
      }}
      onPress={() => {}}
    >
      {/* <Card elevation={2}> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, padding: 10 }}>
        <Card.Cover
          source={imageSource}
          resizeMode='cover'
          resizeMethod='auto'
          style={{ borderRadius: 10, flex: 3, height: 'auto' }}
        />
        <Card.Content style={{ paddingLeft: 0, paddingRight: 0, flex: 7 }}>
          <Text
            variant='titleSmall'
            style={{
              // fontSize: 18,
              fontWeight: 700,
              // margin: 0,
            }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 9, color: '#7E7E7E', marginBottom: 20 }}>By {creater}</Text>
          <Text style={{ textAlign: 'right', fontSize: 9, color: '#858383' }}>
            {progress}% Done
          </Text>
          <ProgressBar progress={progress / 100} color={theme.colors.primary} />
        </Card.Content>
      </View>
      {/* </Card> */}
    </TouchableOpacity>
  );
};
export default CourseCardPaper;
