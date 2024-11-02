import { Address } from './address.type';
import { Cart } from './cart.type';
import { Coupon } from './coupon.type';
import { Notify } from './notify.type';
import { Role } from './role.type';

enum gender {
  FEMALE = 'Female',
  MALE = 'Male',
  OTHER = 'Other',
}
interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: gender;
  status: boolean; // (isActive)
  googleId: string;
  roles: Role[];
  cart: Cart;
  addresses: Address[];
  notifies: Notify[];
  coupons: Coupon[];
  currentCourse: Array<{ _id: string; progress: number; time: string }>;
}
export { User };
