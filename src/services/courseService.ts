import axiosConfig from './axiosConfig';

const createCourse = async (courseData: any) => {
  return await axiosConfig.post('/courses', courseData);
};

const getCourseById = async (id: string) => {
  return await axiosConfig.get(`/courses/${id}`);
};

const getAllCourses = async () => {
  return await axiosConfig.get('/courses');
};

const deleteCourse = async (id: string) => {
  return await axiosConfig.delete(`/courses/${id}`);
};

const filterCourses = async (filterParams: any) => {
  return await axiosConfig.get('/courses/filter', { params: filterParams });
};

const getCategories = async () => {
  return await axiosConfig.get('/courses/categories'); // Assuming the endpoint exists
};

const courseService = {
  createCourse,
  getCourseById,
  getAllCourses,
  deleteCourse,
  filterCourses,
  getCategories,
};

export default courseService;