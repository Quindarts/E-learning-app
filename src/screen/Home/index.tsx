import RootLayout from '@/layout/RootLayout';
import { View } from 'react-native';
import Header from './Header';
import AllCourse from './AllCourse';
import { useCourse } from '@/hook/useCourse';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Text } from 'react-native-paper';

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
        <Text
          variant='bodyMedium'
          style={{
            fontWeight: 600,
            marginTop: 6,
            marginBottom: 14,
            fontSize: 20,
            textAlign: 'start',
          }}
        >
          All course
        </Text>
        <AllCourse courses={courses} loading={loading} error={error} fetchCourses={fetchCourses} />
      </View>
    </RootLayout>
  );
}
