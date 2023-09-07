import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { Profile } from '@/gql/graphql';

export interface ProfileState {
  profile: Profile | null;
  profileSet: (profileData: Profile) => void;
  clear: () => void;
}

export type ProfileStatePersist = (
  config: StateCreator<ProfileState>,
  options: PersistOptions<ProfileState>,
) => StateCreator<ProfileState>;

const useProfileStore = create<ProfileState>(
  (persist as ProfileStatePersist)(
    (set, get) => ({
      profile: null,
      profileSet: (profileData: Profile) => {
        set({ profile: profileData });
      },
      clear: () => {
        set({ profile: null });
      },
    }),
    {
      name: 'profile-storage',
    },
  ),
);

export default useProfileStore;
