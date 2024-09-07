import { create } from 'zustand';
import { produce } from 'immer';

interface UserState {
  user: any | null; // Thay 'any' bằng kiểu dữ liệu cụ thể của user nếu có
  signup: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

interface UserAction {
  signup: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

const useUserStore = create<UserState & UserAction>((set) => ({
  user: null,
  signup: (user) =>
    set(
      produce((state) => {
        state.user = user;
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
}));

export default useUserStore;
