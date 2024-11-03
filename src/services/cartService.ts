import { Cart } from '@/types/cart.type';
import GeneralRepositoryServices from './generalRepository';
import axiosConfig from './axiosConfig';

class CartService {
  private repoCourse = new GeneralRepositoryServices<any>('cart/courses');
  private repoCart = new GeneralRepositoryServices<Cart>('cart');

  public addCourseToCart = async (courseId: string) => {
    return this.repoCourse.save({ courseId });
  };
  public removeCourseFromCart = async (courseId: string) => {
    return await this.repoCourse.deleteById(courseId);
  };
  public getMyCart = async () => {
    return await this.repoCart.findByToken();
  };
  // clear cart
  public clearCart = async () => {
    return await axiosConfig.delete('cart/courses');
  };
}
const cartService = new CartService();

export default cartService;
