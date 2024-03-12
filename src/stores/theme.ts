// NOTE: not used properly to be deleted
import { themes } from "@/utils/themes";
import { create } from "zustand";

type Actions = {
  setPinned: (pin: boolean) => void;
  setTheme: (theme: string) => void;
};

type State = {
  pinned: boolean;
  theme: (typeof themes)[number];
};

export const themeStore = create<State & Actions>()((set) => ({
  pinned: false,
  setPinned: (pin) => set({ pinned: pin }),
  theme: themes[0], // deffault system
  setTheme: (theme) => {
    set({ theme: themes.find((t) => t.name === theme) || themes[0] });
  },
}));
