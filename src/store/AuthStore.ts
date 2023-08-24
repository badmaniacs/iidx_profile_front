import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  user: {
    id: number;
    username: string;
    email: string;
    createAt: string;
  } | null;
  login: (userData: {
    id: number;
    username: string;
    email: string;
    createAt: string;
  }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  login: (userData) => {
    set({ isLoggedIn: true, user: userData });
    console.log('로그인');
  },
  logout: () => {
    set({ isLoggedIn: false, user: null });
  },
}));

export default useAuthStore;
