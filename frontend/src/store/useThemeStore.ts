import { create } from "zustand";

type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: "forest",
  setTheme: (theme: string) => set({ theme }),
}));
