import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoFrame from './Video';
import TabOverview from './TabOverview';
import TabLesson from './TabLesson';
import TabReview from './TabReview';
import theme from '@/theme';
import { Text } from 'react-native-paper';
import TabBarCustom from './TabBar';
import Header from '../Home/Header';
import LeftButtonRouting from '@/components/shared/LeftButton';
import { ROUTING } from '@/utils/constants';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import ButtonPaper from '@/components/ui/Button';
import useCart from '@/hook/useCart';

// const renderScene = SceneMap({
//   overview: TabOverview,
//   lesson: TabLesson,
//   review: TabReview,
// });

function Lession() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { addCourseToCart } = useCart();

  const router = useRoute();
  const { course } = router.params as any;

  // console.log('🚀 ~ Lession ~ course: ', course, ' id: ', course._id);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'overview', title: 'Overviews' },
    { key: 'lesson', title: 'Lesson' },
    { key: 'review', title: 'Reviews' },
  ]);
  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case 'overview':
        return <TabOverview course={course} />;
      case 'lesson':
        return <TabLesson course={course} />;
      case 'review':
        return <TabReview course={course} />;
      default:
        return null;
    }
  };
  const handleEnroll = () => {
    // xong het thi uncomment
    // addCourseToCart(course._id);
    navigation.navigate(ROUTING.DETAIL, { course: course });
  };
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {/* <Header /> */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          top: 10,
          zIndex: 10,
        }}
      >
        <LeftButtonRouting icon='arrow-left' backPath={ROUTING.BOTTOM_TAB} />
      </View>
      <VideoFrame />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{ backgroundColor: '#fffff' }}
        renderTabBar={TabBarCustom}
      />
      <ButtonPaper
        mode='contained'
        style={{
          marginBottom: 10,
          width: '80%',
          position: 'absolute',
          bottom: 10,
          left: '10%',
        }}
        textColor='white'
        rounded='sm'
        size='sm'
        onPress={() => {
          handleEnroll();
        }}
      >
        MAKE AN ENROLLMENT
      </ButtonPaper>
    </View>
  );
}

export default Lession;
