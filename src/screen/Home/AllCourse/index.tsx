import CardProjectPaper from '@/components/ui/Card/CardProject/Index';
import { Course } from '@/types/course.type';
import React, { useEffect } from 'react';
import { View } from 'react-native';
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
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {courses?.map((course: Course, Index) => (
          <CardProjectPaper
            key={Index}
            courseId={course.id}
            imageSource={{ uri: course.imgUrls[0] }}
            title={course.name}
            creater={course.author}
            initialRating={5}
            progress={Number(course.totalDuration)}
          />
        ))}
      </View>
    </View>
  );
}

export default AllCourse;
