import { atom } from "jotai";

import { defaultCreateProblemMarkdown } from "@/constants/markdown";

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
  description: defaultCreateProblemMarkdown,
  htmlCode: "",
  cssCode: "",
  jsCode: "",
});
