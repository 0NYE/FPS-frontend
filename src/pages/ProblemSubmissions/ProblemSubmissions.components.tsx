import { useState } from "react";
import { useParams } from "react-router-dom";

import SubmissionBlockList from "@/components/SubmissionBlockList/SubmissionBlockList.component";
import SubmissionSummary from "@/components/SubmissionSummary/SubmissionSummary.component";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import { domain } from "@/constants/api";
import { useFetch } from "@/hooks/useFetch";
import { LighthouseReport } from "@/types/lighthouse";
import { ProblemSubmitApiResult , ProblemSubmitResult } from "@/types/problem";

const ProblemSubmissions = () => {
  const { problem_id } = useParams();
  const [submissionIndex, setSubmissionIndex] = useState(-1);
  const { data: problemSubmissions } = useFetch<ProblemSubmitResult[]>(
    `http://${domain}/problems/submit/${problem_id}`
  );
  if (!problemSubmissions) return <TwoVerticalSection></TwoVerticalSection>;

  const parsedProblemSubmissions = problemSubmissions.map(
    (problemSubmission) => {
      const lighthouseApiResult = JSON.parse(
        problemSubmission.lighthouse_report
      ) as ProblemSubmitApiResult;
      return {
        ...problemSubmission,
        parsedLighthouseReport: JSON.parse(
          lighthouseApiResult.report
        ) as LighthouseReport,
      };
    }
  );

  const submissionClickHandler = (id: string) => {
    setSubmissionIndex(Number(id));
  };

  return (
    <TwoVerticalSection
      leftChildren={
        <SubmissionBlockList
          submissionResults={parsedProblemSubmissions}
          userName="jjiny"
          avatarUrl=""
          onClick={submissionClickHandler}
          selectedIndex={submissionIndex}
        />
      }
      rightChildren={
        parsedProblemSubmissions[submissionIndex] && (
          <SubmissionSummary
            userName="jjiny"
            avatarUrl=""
            problemSubmitResult={parsedProblemSubmissions[submissionIndex]}
          />
        )
      }
    />
  );
};

export default ProblemSubmissions;
