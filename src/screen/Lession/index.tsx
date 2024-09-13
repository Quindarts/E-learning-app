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
import { useRoute } from '@react-navigation/native';

const renderScene = SceneMap({
  overview: TabOverview,
  lesson: TabLesson,
  review: TabReview,
});

function Lession() {
  const router = useRoute();
  console.log('🚀 ~ Lession ~ lessionId:', router.params);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'overview', title: 'Overviews' },
    { key: 'lesson', title: 'Lesson' },
    { key: 'review', title: 'Reviews' },
  ]);
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
    </View>
  );
}

export default Lession;
