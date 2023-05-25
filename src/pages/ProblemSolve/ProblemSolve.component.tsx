import React from "react";
import { useParams } from "react-router-dom";

import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import { domain } from "@/constants/api";
import { useFetch } from "@/hooks/useFetch";
import {
  ProblemSectionLayout,
  ProblemTitle,
  ProblemDescription,
  ProblemRenderBox,
  ProblemTipParagraph,
} from "@/pages/ProblemSolve/ProblemSolve.styles";
import { ProblemDetailInformation } from "@/types/problem";

const ProblemSolve = () => {
  const { problem_id } = useParams();
  const { data: problem } = useFetch<ProblemDetailInformation>(
    `http://${domain}/problems/${problem_id}`
  );
  console.log(problem);
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
                  html={problem.htmlCode}
                  css={problem.cssCode}
                  js={problem.jsCode}
                />
              </ProblemRenderBox>
              <ProblemTipParagraph>
                잘 모르겠다면 브라우저 개발자 도구를 활용해보세요!
              </ProblemTipParagraph>
            </ProblemSectionLayout>
          }
        />
      ) : (
        <TwoVerticalSection />
      )}
    </>
  );
};

export default ProblemSolve;
