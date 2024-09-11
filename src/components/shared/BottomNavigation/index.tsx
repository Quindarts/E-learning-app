import DetailsScreen from '@/screen/DetailsScreen';
import Home from '@/screen/Home';
import MyCoursesScreen from '@/screen/myCourses';
import ProfileScreen from '@/screen/Profile';
import theme from '@/theme';
import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

const RoutingApp = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Homes', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'mycourses', title: 'My Courses', focusedIcon: 'book', unfocusedIcon: 'book-outline' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    // detail: DetailsScreen,
    mycourses: MyCoursesScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: '#ffffff' }}
      activeColor={theme.colors.primary}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default RoutingApp;
