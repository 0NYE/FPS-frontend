import React from "react";

import { useAtomValue } from "jotai";

import { htmlAtom, cssAtom, jsAtom } from "@/atoms/code";
import { problemCreateInfoAtom } from "@/atoms/problemCreate";
import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import MainHeader from "@/components/MainHeader/MainHeader.component";
import ProblemSection from "@/components/ProblemSection/ProblemSection.components";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import {
  CreateProblemPageLayout,
  CreateProblemPageMain,
} from "@/pages/CreateProblemPage/CreateProblemPage.styles";
import ProblemInputForm from "@/pages/CreateProblemPage/ProblemInputForm/ProblemInputForm.component";

const CreateProblemPage = () => {
  const { title, tags, description, htmlCode, cssCode, jsCode } = useAtomValue(
    problemCreateInfoAtom
  );

  return (
    <CreateProblemPageLayout>
      <MainHeader />
      <CreateProblemPageMain>
        <TwoVerticalSection
          leftChildren={<ProblemInputForm />}
          rightChildren={
            <ProblemSection
              title={title}
              tags={tags}
              descriptionMarkdown={description}
              htmlCode={htmlCode}
              cssCode={cssCode}
              jsCode={jsCode}
            />
          }
        />
      </CreateProblemPageMain>
    </CreateProblemPageLayout>
  );
};

export default CreateProblemPage;
