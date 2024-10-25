import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import { useCourse } from '@/hook/useCourse';
import { Course } from '@/types/course.type';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface AllCourseProps {
  courses: any[];
  loading: boolean;
  error: string | null;
  fetchCourses: () => void;
}

function AllCourse({ courses, loading, error, fetchCourses }: AllCourseProps) {
  // const { courses, loading, error, fetchCourses } = useCourse(); // Get courses, loading state, and errors from the hook

  useEffect(() => {
    fetchCourses();
  }, []);

  // useEffect(() => {
  //   // Kiểm tra khi state courses thay đổi, AllCourse sẽ tự động re-render
  //   console.log('Danh sách courses đã cập nhật:', courses);
  // }, [courses]);

  // // Handle loading state
  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Handle error state
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  // If no courses are found, show a message
  if (courses && courses.length === 0) {
    return <Text>No courses found.</Text>;
  }

  return (
    <View>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>
          Continue Watching
        </Text>
        <Text variant='bodyMedium'>View all</Text>
      </View> */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {courses?.map((course: Course) => (
          <CardProjectPaper
            key={course._id}
            lessionId={course._id}
            imageSource={{ uri: course.imgUrls[0] }} // Adjust based on your course data structure
            title={course.name}
            creater={course.author}
            initialRating={5}
            progress={Number(course.totalDuration)} // Adjust based on your course data structure
          />
        ))}
      </View>
    </View>
  );
}

export default AllCourse;
