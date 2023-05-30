import SubmissionBlock from "@/components/SubmissionBlock/SubmissionBlock.component";
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
  submissionResults.sort((a, b) => {
    return (
      new Date(b.submission_date).getTime() -
      new Date(a.submission_date).getTime()
    );
  });

  return (
    <ul>
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
            <li key={submission_date + index}>
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
                date={new Date(submission_date)}
              ></SubmissionBlock>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default SubmissionBlockList;
