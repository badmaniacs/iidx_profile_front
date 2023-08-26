import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface UserData {
  id: number;
  username: string;
  email: string;
  createAt: string;
  accessToken: string;
}

export interface AuthState {
  user: UserData | null;
  isLoggedIn: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
}

export type AuthStatePersist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState> 
) => StateCreator<AuthState>


const useAuthStore = create<AuthState>(
  (persist as AuthStatePersist)(
    (set, get) => ({
      user: null,
      isLoggedIn: false,
      login: (userData: UserData) => {
        set({ isLoggedIn: true, user: userData });
      },
      logout: () => {
        set({ isLoggedIn: false, user: null });
      },
    }),
    {
      name: 'user-storage',
    },
  ),
);

export default useAuthStore;
