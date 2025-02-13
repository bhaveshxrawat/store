import { getItem, setItem } from "@/utils/localStorage";
import { create } from "zustand";

type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getItem("preferredTheme", "forest"),
  setTheme: (theme: string) => {
    setItem("preferredTheme", theme);
    set({ theme });
  },
}));
