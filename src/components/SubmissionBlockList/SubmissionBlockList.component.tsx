import SubmissionBlock from "@/components/SubmissionBlock/SubmissionBlock.component";
import { SubmissionsBlockListLayout } from "@/components/SubmissionBlockList/SubmissionBlockList.styles";
import { ProblemSubmitResult } from "@/types/problem";
import { lighthouseReportToMetricScoreMap } from "@/utils/lighthouse";

interface SubmissionsBlockListProps {
  submissionResults: ProblemSubmitResult[];
  userName: string;
  avatarUrl: string;
  onClick?: (id: string) => void;
  selectedIndex?: number;
}

const SubmissionBlockList = ({
  submissionResults,
  userName,
  avatarUrl,
  onClick,
  selectedIndex,
}: SubmissionsBlockListProps) => {
  return (
    <SubmissionsBlockListLayout>
      {submissionResults.map(
        (
          {
            submission_date,
            success,
            fail_reason,
            similarity,
            parsedLighthouseReport,
          },
          index
        ) => {
          if (!parsedLighthouseReport) return <li></li>;

          const metricScores = {
            "UI 유사도": Math.round(similarity * 100),
            ...lighthouseReportToMetricScoreMap(parsedLighthouseReport),
          };

          return (
            <li key={(submission_date as Date).getTime() + index}>
              <SubmissionBlock
                id={index.toString()}
                isSuccess={success}
                reason={fail_reason}
                userName={userName}
                avatarURL={avatarUrl}
                perfectScore={100}
                metricScores={metricScores}
                handleClick={(id: string) => {
                  onClick && onClick(id);
                }}
                isActive={selectedIndex === index}
                date={submission_date as Date}
              ></SubmissionBlock>
            </li>
          );
        }
      )}
    </SubmissionsBlockListLayout>
  );
};

export default SubmissionBlockList;
