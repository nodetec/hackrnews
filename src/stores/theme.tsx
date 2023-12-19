import { themes } from "@/utils/themes";
import { create } from "zustand";

interface ThemeState {
  theme: (typeof themes)[number];
  setTheme: (theme: string) => void;
}

export const themeStore = create<ThemeState>()((set) => ({
  theme: themes[0], // deffault system
  setTheme: (theme) => {
    set({ theme: themes.find((t) => t.name === theme) || themes[0] });
  },
}));
