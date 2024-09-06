import { create } from 'zustand';
import { produce } from 'immer';

interface UserState {
  user: any | null; // Thay 'any' bằng kiểu dữ liệu cụ thể của user nếu có
  signup: (user: any) => void;
  logout: () => void;
  setUser: (user: any) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  signup: (user: any) =>
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
  setUser: (user: any) =>
    set(
      produce((state) => {
        state.user = user;
      }),
    ),
}));

export default useUserStore;
