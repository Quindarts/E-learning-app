import DetailsScreen from '@/screen/DetailsScreen';
import Home from '@/screen/Home';
import theme from '@/theme';
import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

const RoutingApp = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'detail', title: 'detail', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    detail: DetailsScreen,
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
