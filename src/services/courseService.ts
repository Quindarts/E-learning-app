import axiosConfig from './axiosConfig';
import GeneralRepositoryServices from './generalRepository';

class CourseService {
  private repoCourse = new GeneralRepositoryServices<any>('courses');

  public createCourse = async (courseData: any) => {
    return await this.repoCourse.save(courseData);
  };

  public getCourseById = async (id: string) => {
    return await this.repoCourse.findById(id);
  };

  public getAllCourses = async () => {
    return await axiosConfig.get('/courses');
  };

  public deleteCourse = async (id: string) => {
    return await this.repoCourse.deleteById(id);
  };

  public filterCourses = async (filterParams: any) => {
    return await axiosConfig.get('/courses/filter', { params: filterParams });
  };

  public getCategories = async () => {
    return await axiosConfig.get('/courses/categories');
  };
}

const courseService = new CourseService();

export default courseService;
