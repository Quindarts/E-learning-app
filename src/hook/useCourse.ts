import { useState, useEffect } from 'react';
import courseService from '@/services/courseService';

// Assuming the same Course interface we defined earlier
export const useCourse = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all courses
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response: any = await courseService.getAllCourses();
      setCourses(response.courses);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single course by ID
  const fetchCourseById = async (id: string) => {
    setLoading(true);
    try {
      const response: any = await courseService.getCourseById(id);
      setCourse(response.course);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch course');
    } finally {
      setLoading(false);
    }
  };

  // Create a new course
  const createCourse = async (courseData: any) => {
    setLoading(true);
    try {
      const response: any = await courseService.createCourse(courseData);
      setCourses((prevCourses) => [...prevCourses, response.course]); // Add the new course
    } catch (err: any) {
      setError(err.message || 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  // Delete a course by ID
  const deleteCourse = async (id: string) => {
    setLoading(true);
    try {
      await courseService.deleteCourse(id);
      setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete course');
    } finally {
      setLoading(false);
    }
  };

  // Hook to automatically fetch all courses on component mount
  // useEffect(() => {
  //   fetchCourses();
  // }, []);

  return {
    courses,
    course,
    loading,
    error,
    fetchCourses,
    fetchCourseById,
    createCourse,
    deleteCourse,
  };
};
