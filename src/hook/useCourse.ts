import { useState, useEffect } from 'react';
import courseService from '@/services/courseService';

export const useCourse = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all courses
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response: any = await courseService.getAllCourses();
      setCourses(response.course);
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

  // call ở đây hoặc ở từng component nhỏ
  // useEffect(() => {
  //   fetchCourses();
  //   fetchCategories();
  // }, []);

  // useEffect(() => {
  //   console.log('Vừa update', courses);
  // }, [courses]);

  // Fetch categories (Assuming you have an API for this)
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response: any = await courseService.getCategories(); // Assuming there's an endpoint for categories
      // console.log(response.categories);
      setCategories(response.categories);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredCourses = async (filters: any) => {
    setLoading(true);
    try {
      const response: any = await courseService.filterCourses(filters);
      setCourses([...response.courses]);
      // console.log('Filtered courses:', response.courses);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  return {
    courses,
    course,
    categories,
    loading,
    error,
    fetchCourses,
    fetchCourseById,
    createCourse,
    deleteCourse,
    fetchCategories,
    fetchFilteredCourses,
  };
};
