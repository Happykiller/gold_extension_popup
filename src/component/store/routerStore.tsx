import { create } from 'zustand';

export interface RouterStore {
  route: string
  navigateTo: (route: string) => void
}

export const routerStore = create<RouterStore>((set) => ({
  route: '/',
  navigateTo: (route: string) => set({ route }),
}))