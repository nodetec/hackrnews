import { create } from "zustand";

export type User = {
  name: string;
  about: string;
  picture: string;
  nip05: string;
  lud06: string;
  lud16: string;
  banner: string;
};

export interface UserState extends User {
  setUser: (user: User) => void;
}

export const userStore = create<UserState>((set) => ({
  name: "",
  about: "",
  picture: "",
  nip05: "",
  lud06: "",
  lud16: "",
  banner: "",
  setUser: (user: User) => {
    return set({
      name: user.name,
      about: user.about,
      picture: user.picture,
      nip05: user.nip05,
      lud06: user.lud06,
      lud16: user.lud16,
      banner: user.banner,
    });
  },
}));
