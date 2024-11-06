import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import { Course } from '@/types/course.type';
import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';

interface AllCourseProps {
  courses: any[];
  loading: boolean;
  error: string | null;
  fetchCourses: () => void;
}

function AllCourse({ courses, loading, error, fetchCourses }: AllCourseProps) {
  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (courses && courses.length === 0) {
    return <Text>No courses found.</Text>;
  }

  return (
    <View
      style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10 }}
    >
      {courses?.map((course: any) => (
        <View style={{ width: '48%' }}>
          <CardProjectPaper
            key={course._id}
            name={course.name}
            author={course.author}
            progress={Number(course.totalDuration ?? 0)}
            imageSource={{ uri: course.imgUrls[0] }}
            courseId={course._id}
            initialRating={5}
          />
        </View>
      ))}
    </View>
  );
}

export default AllCourse;
