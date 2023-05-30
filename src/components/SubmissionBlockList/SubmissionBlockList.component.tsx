import SubmissionBlock from "@/components/SubmissionBlock/SubmissionBlock.component";
import { ProblemSubmitResult } from "@/types/problem";

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
    <ul>
      {submissionResults.map(
        (
          { submission_date, success, fail_reason, parsedLighthouseReport },
          index
        ) => {
          if (!parsedLighthouseReport) return <li></li>;

          const metricScores = Object.keys(
            parsedLighthouseReport.categories
          ).reduce((object, category) => {
            const categoryInfo =
              parsedLighthouseReport.categories[
                category as keyof typeof parsedLighthouseReport.categories
              ];
            if (!categoryInfo) return object;

            object[categoryInfo.title] = categoryInfo.score * 100;
            return object;
          }, {} as { [K: string]: number });

          return (
            <li key={submission_date}>
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
