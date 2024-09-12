import Home from '@/screen/Home';
import MyCoursesScreen from '@/screen/myCourses';
import ProfileScreen from '@/screen/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type TabScreenType = {
  name: string;
  component: any;
};
const TabScreen: TabScreenType[] = [
  {
    name: 'Home',
    component: <Home />,
  },
  {
    name: 'Profile',
    component: <ProfileScreen />,
  },
  {
    name: 'My Courses',
    component: <MyCoursesScreen />,
  },
];
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {TabScreen.map((tab) => (
        <Tab.Screen name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
