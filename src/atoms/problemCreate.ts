import { atomWithReset } from "jotai/utils";

import { defaultCreateProblemMarkdown } from "@/constants/markdown";

export const problemCreateInfoAtom = atomWithReset<{
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
