import { Cart } from './cart.type';

interface IUser {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: 'M' | 'F' | 'O';
  cart: Cart;
}

interface IAuth {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export { IUser, IAuth };
