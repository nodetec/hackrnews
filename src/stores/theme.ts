/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

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
