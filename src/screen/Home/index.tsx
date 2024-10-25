import RootLayout from '@/layout/RootLayout';
import { Text, View } from 'react-native';
import Header from './Header';
import TrendingNow from './TrendingNow';
import AllCourse from './AllCourse';
import { useCourse } from '@/hook/useCourse';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function HomeScreen() {
  // const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {
    courses,
    categories,
    loading,
    error,
    fetchCourses,
    fetchFilteredCourses,
    fetchCategories,
  } = useCourse();
  return (
    <RootLayout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Header
          fetchCourses={fetchCourses}
          fetchFilteredCourses={fetchFilteredCourses}
          fetchCategories={fetchCategories}
          categories={categories}
        />
        <AllCourse courses={courses} loading={loading} error={error} fetchCourses={fetchCourses} />
      </View>
    </RootLayout>
  );
}
