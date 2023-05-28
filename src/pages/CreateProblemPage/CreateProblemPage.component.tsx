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
              title={title || "생성될 문제 미리보기"}
              tags={tags.length ? tags : ["예시 태그1", "예시 태그2"]}
              descriptionMarkdown={description}
              htmlCode={htmlCode}
              cssCode={cssCode}
              jsCode={jsCode}
              tipText="html을 제출해도 미리보기가 작동하지 않는다면, <body>의 내용물만 넣어보세요!"
            />
          }
        />
      </CreateProblemPageMain>
    </CreateProblemPageLayout>
  );
};

export default CreateProblemPage;
