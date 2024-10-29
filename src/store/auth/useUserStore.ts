import { create } from 'zustand';
import { produce } from 'immer';
import { User } from '@/types/user.type';
import { Cart } from '@/types/cart.type';

interface UserState {
  user: Partial<User>;
  carts: Partial<Cart>; // any
}

interface UserAction {
  signup: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
  setCart: (cart: Cart) => void;
}

const useUserStore = create<UserState & UserAction>((set) => ({
  user: {},
  carts: {},
  signup: (user) =>
    set(
      produce((state) => {
        state.user = user;
        state.carts = user.carts;
      }),
    ),
  logout: () =>
    set(
      produce((state) => {
        state.user = null;
      }),
    ),
  setUser: (user) =>
    set(
      produce((state) => {
        state.user = user;
      }),
    ),
  setCart: (carts) =>
    set(
      produce((state) => {
        state.carts = carts;
      }),
    ),
}));

export default useUserStore;
