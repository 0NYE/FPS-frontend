import React from "react";
import { useParams } from "react-router-dom";

import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import Button from "@/components/Button/Button.component";
import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import ProgressBar from "@/components/ProgressBar/ProgressBar.components";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import { domain } from "@/constants/api";
import { useFetch } from "@/hooks/useFetch";
import {
  ProblemSectionLayout,
  ProblemTitle,
  ProblemDescription,
  ProblemRenderBox,
  ProblemTipParagraph,
  SolveSectionLayout,
  EditorControlBox,
  EditorBox,
  UserCodeRenderBoxWrapper,
  UserCodeRenderBox,
  SubmissionControlBox,
  ProgressBarBox,
} from "@/pages/ProblemSolve/ProblemSolve.styles";
import { ProblemDetailInformation } from "@/types/problem";

const ProblemSolve = () => {
  const { problem_id } = useParams();
  const { data: problem } = useFetch<ProblemDetailInformation>(
    `http://${domain}/problems/${problem_id}`
  );

  return (
    <>
      {problem ? (
        <TwoVerticalSection
          leftChildren={
            <ProblemSectionLayout>
              <ProblemTitle>{`${problem_id}. ${problem.title}`}</ProblemTitle>
              <ProblemDescription>{problem.description}</ProblemDescription>
              <ProblemRenderBox>
                <CodeResultFrame
                  html={problem.HTML_code}
                  css={problem.CSS_code}
                  js={problem.JS_code}
                />
              </ProblemRenderBox>
              <ProblemTipParagraph>
                잘 모르겠다면 브라우저 개발자 도구를 활용해보세요!
              </ProblemTipParagraph>
            </ProblemSectionLayout>
          }
          rightChildren={
            <SolveSectionLayout>
              <EditorControlBox></EditorControlBox>
              <EditorBox>
                <Editor
                  defaultLanguage="html"
                  loading="에디터를 불러오는 중입니다..."
                  options={{
                    minimap: { enabled: false },
                    scrollbar: { vertical: "auto", horizontal: "auto" },
                  }}
                />
              </EditorBox>
              <UserCodeRenderBoxWrapper>
                <UserCodeRenderBox>
                  <CodeResultFrame />
                </UserCodeRenderBox>
              </UserCodeRenderBoxWrapper>
              <SubmissionControlBox>
                <ProgressBarBox>
                  <ProgressBar value={50} label="유사도: 50%" />
                </ProgressBarBox>
                <Button variant="green">제출</Button>
              </SubmissionControlBox>
            </SolveSectionLayout>
          }
        />
      ) : (
        <TwoVerticalSection />
      )}
    </>
  );
};

export default ProblemSolve;
