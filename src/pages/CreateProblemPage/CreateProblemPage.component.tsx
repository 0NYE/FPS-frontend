import React from "react";

import { useAtom } from "jotai";

import { htmlAtom, cssAtom, jsAtom } from "@/atoms/code";
import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import MainHeader from "@/components/MainHeader/MainHeader.component";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import {
  CreateProblemPageLayout,
  CreateProblemPageMain,
} from "@/pages/CreateProblemPage/CreateProblemPage.styles";
import ProblemInputForm from "@/pages/CreateProblemPage/ProblemInputForm/ProblemInputForm.component";




const CreateProblemPage = () => {
  const [html] = useAtom(htmlAtom);
  const [css] = useAtom(cssAtom);
  const [js] = useAtom(jsAtom);

  return (
    <CreateProblemPageLayout>
      <MainHeader />
      <CreateProblemPageMain>
        <TwoVerticalSection
          leftChildren={<ProblemInputForm />}
          rightChildren={<CodeResultFrame html={html} css={css} js={js} />}
        />
      </CreateProblemPageMain>
    </CreateProblemPageLayout>
  );
};

export default CreateProblemPage;
