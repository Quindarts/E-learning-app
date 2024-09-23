import { Address } from './address.type';
import { Cart } from './cart.type';
import { Notify } from './notify.type';
import { Role } from './role.type';

interface User {
  _id: string;
  FirstName: string;
  LastName: string;
  email: string;
  phone: string;
  gender: 'Female' | 'Male' | 'Other';
  status: boolean; // (isActive)
  googleId: string;
  roles: Role[];
  carts: Cart[];
  addresses: Address[];
  notifies: Notify[];
}
export { User };
