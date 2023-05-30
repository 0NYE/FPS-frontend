import { atom } from "jotai";

export interface User {
  nickname: string;
  profile_image: string;
}

export const userAtom = atom<User | null>(null);
