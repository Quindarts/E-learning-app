import React, { useEffect } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import VideoFrame from './Video';
import TabOverview from './TabOverview';
import TabLesson from './TabLesson';
import TabReview from './TabReview';
import theme from '@/theme';
import { ActivityIndicator, Text } from 'react-native-paper';
import TabBarCustom from './TabBar';
import Header from '../Home/Header';
import LeftButtonRouting from '@/components/shared/LeftButton';
import { ROUTING } from '@/utils/constants';
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import ButtonPaper from '@/components/ui/Button';
import useCart from '@/hook/useCart';
import useUserStore from '@/store/auth/useUserStore';
import { useCourse } from '@/hook/useCourse';

function Lession() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const setCart = useUserStore((s) => s.setCart);
  const { addCourseToCart } = useCart();

  const router = useRoute();
  const { courseId, isMyCourse } = router.params as any;
  const { course, fetchCourseById, loading, error } = useCourse();

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'overview', title: 'Overviews' },
    { key: 'lesson', title: 'Lesson' },
    { key: 'review', title: 'Reviews' },
  ]);

  useEffect(() => {
    if (courseId) {
      fetchCourseById(courseId);
    }
  }, []);

  const renderScene = ({ route }: any) => {
    if (!course) return null;
    switch (route.key) {
      case 'overview':
        return <TabOverview course={course} />;
      case 'lesson':
        return <TabLesson lessons={course.lessons} />;
      case 'review':
        return <TabReview reviews={course.reviews} />;
      default:
        return null;
    }
  };
  const handleEnroll = async () => {
    try {
      const res = await addCourseToCart(course._id);
      if (res && res.success && res.cart.items.length > 0) {
        navigation.navigate(ROUTING.DETAIL);
      }
    } catch (error) {
      console.error('Failed to add course to cart:', error);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

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
      <VideoFrame course={course} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{ backgroundColor: '#fffff' }}
        renderTabBar={TabBarCustom}
      />
      {!isMyCourse && (
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
      )}
    </View>
  );
}

export default Lession;
