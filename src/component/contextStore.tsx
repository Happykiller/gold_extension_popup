import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface ContextStore {
  id: string
  code: string
  accessToken: string
  reset: () => void
}

const initialState:any = {
  id: null,
  code: null,
  accessToken: null
}

const contextPersist = persist<ContextStore>(
  (set) => ({
    ...initialState,
    reset: () => set(initialState)
  }),
  {
      name: "gold-storage",
      storage: createJSONStorage(() => sessionStorage),
  }
);

export const contextStore = create<ContextStore>()(contextPersist);