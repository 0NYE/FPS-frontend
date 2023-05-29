import { atom } from "jotai";

import { Problem } from "@/types/problem";

export const problemsAtom = atom<Problem[]>([]);
