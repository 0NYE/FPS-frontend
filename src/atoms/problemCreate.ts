import { atom } from "jotai";

export const problemCreateInfoAtom = atom<{
  title: string;
  tags: string[];
  description: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}>({
  title: "",
  tags: [],
  description: "",
  htmlCode: "",
  cssCode: "",
  jsCode: "",
});
