import { Course } from './course.type';

interface CartItem {
  course: Pick<Course, 'name' | 'description' | 'author' | 'imgUrls' | 'price'>;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  totalPrice: number;
}

export { Cart, CartItem };
