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
    <FlatList
      data={courses}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginHorizontal: 5, marginBottom: 10 }}>
          <CardProjectPaper
            courseId={item._id}
            imageSource={{ uri: item.imgUrls[0] }}
            name={item.name}
            author={item.author}
            initialRating={5}
            progress={Number(item.totalDuration)}
          />
        </View>
      )}
      numColumns={2}
      style={{ flex: 1 }}
      scrollEnabled={false}
    />
  );
}

export default AllCourse;
