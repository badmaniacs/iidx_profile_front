import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export interface Searchresult {
  title: string;
  level: number;
  difficulty: string;
  rank: string;
  score: string;
  cleartype: string;
  playtype: string;
}

export interface SearchresultState {
  Searchresult: Searchresult[] | null;
  SearchresultSet: (Searchresult: Searchresult[]) => void;
  clearSearch: () => void;
}

export type SearchresultStatePersist = (
  config: StateCreator<SearchresultState>,
  options: PersistOptions<SearchresultState>,
) => StateCreator<SearchresultState>;

const useSearchresultStore = create<SearchresultState>(
  (persist as SearchresultStatePersist)(
    (set, get) => ({
      Searchresult: null,
      SearchresultSet: (searchresult: Searchresult[]) => {
        set({ Searchresult: searchresult });
      },
      clearSearch: () => {
        set({ Searchresult: null });
      },
    }),
    {
      name: 'searchresult-storage',
    },
  ),
);

export default useSearchresultStore;
