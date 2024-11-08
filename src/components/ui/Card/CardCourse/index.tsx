import theme from '@/theme';
import { ROUTING } from '@/utils/constants';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text, Card, CardProps, Paragraph, ProgressBar, Title } from 'react-native-paper';

interface CourseCardProps {
  name: string;
  author: string;
  progress: number;
  imageSource: any;
  courseId: string; // course id
}

const CourseCardPaper: React.FC<CourseCardProps> = ({
  name,
  author,
  progress,
  imageSource,
  courseId,
}) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <Card
      onPress={() =>
        navigation.navigate(ROUTING.LESSION_DETAIL, {
          courseId: courseId,
          isMyCourse: true,
        })
      }
      elevation={2}
      style={{
        marginBottom: 10,
        width: '100%',
        backgroundColor: '#F4F9FF',
        borderRadius: 8,
        elevation: 2, // Tạo hiệu ứng đổ bóng nhẹ
      }}
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
            {name}
          </Text>
          <Text style={{ fontSize: 9, color: '#7E7E7E', marginBottom: 20 }}>By {author}</Text>
          <Text style={{ textAlign: 'right', fontSize: 9, color: '#858383' }}>
            {progress ?? 0}% Done
          </Text>
          <ProgressBar progress={(progress ?? 0) / 100} color={theme.colors.primary} />
        </Card.Content>
      </View>
      {/* </Card> */}
    </Card>
  );
};
export default CourseCardPaper;
