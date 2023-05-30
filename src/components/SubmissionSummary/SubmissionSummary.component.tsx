import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Avatar from "@/components/Avatar/Avatar.component";
import Button from "@/components/Button/Button.component";
import { CircleChart } from "@/components/CircleChart/CircleChart.component";
import LanguageSyntaxHighlighter from "@/components/LanguageSyntaxHighlighter/LanguageSyntaxHighlighter.component";
import {
  SubmissionSummaryLayout,
  SubmissionSummaryCodeSection,
  SubmissionSummaryHeader,
  SubmissionSummaryHeaderTextBox,
  SubmissionSummaryHeaderTitle,
  SubmissionSummaryHeaderDateParagraph,
  SubmissionSummaryScoreBox,
  SubmissionSummaryScoreList,
  SubmissionSummaryCodetitle,
} from "@/components/SubmissionSummary/SubmissionSummary.styles";
import { ProblemSubmitResult } from "@/types/problem";
import { dateToYMDHMString } from "@/utils/date";
import { lighthouseReportToMetricScoreMap } from "@/utils/lighthouse";
import { changeEscapesToReal } from "@/utils/string";

interface SubmissionDetailProps {
  userName: string;
  avatarUrl: string;
  problemSubmitResult: ProblemSubmitResult;
}

const SubmissionSummary = ({
  userName,
  avatarUrl,
  problemSubmitResult,
}: SubmissionDetailProps) => {
  const {
    submission_date,
    HTML_code,
    CSS_code,
    JS_code,
    parsedLighthouseReport,
  } = problemSubmitResult;
  if (!parsedLighthouseReport) return <>라이트하우스 결과가 필요합니다!</>;
  const metricScores = lighthouseReportToMetricScoreMap(parsedLighthouseReport);

  return (
    <SubmissionSummaryLayout>
      <SubmissionSummaryHeader>
        <Avatar src={avatarUrl} />
        <SubmissionSummaryHeaderTextBox>
          <SubmissionSummaryHeaderTitle>{`${userName}님의 제출 기록 요약`}</SubmissionSummaryHeaderTitle>
          <SubmissionSummaryHeaderDateParagraph>
            {dateToYMDHMString(new Date(submission_date))}
          </SubmissionSummaryHeaderDateParagraph>
        </SubmissionSummaryHeaderTextBox>
      </SubmissionSummaryHeader>
      <SubmissionSummaryScoreList>
        {Object.keys(metricScores).map((key) => {
          return (
            <li key={key}>
              <SubmissionSummaryScoreBox>
                <CircleChart
                  score={metricScores[key] * 100}
                  perfectScore={100}
                  size="medium"
                  animation={true}
                />
                {key}
              </SubmissionSummaryScoreBox>
            </li>
          );
        })}
      </SubmissionSummaryScoreList>
      <SubmissionSummaryCodeSection>
        <SubmissionSummaryCodetitle>HTML</SubmissionSummaryCodetitle>
        <LanguageSyntaxHighlighter
          language="htmlbar"
          style={stackoverflowLight}
        >
          {changeEscapesToReal(HTML_code)}
        </LanguageSyntaxHighlighter>
      </SubmissionSummaryCodeSection>
      {CSS_code && (
        <SubmissionSummaryCodeSection>
          <SubmissionSummaryCodetitle>CSS</SubmissionSummaryCodetitle>
          <LanguageSyntaxHighlighter language="css" style={stackoverflowLight}>
            {changeEscapesToReal(CSS_code)}
          </LanguageSyntaxHighlighter>
        </SubmissionSummaryCodeSection>
      )}
      {JS_code && (
        <SubmissionSummaryCodeSection>
          <SubmissionSummaryCodetitle>JavaScript</SubmissionSummaryCodetitle>
          <LanguageSyntaxHighlighter
            language="javascript"
            style={stackoverflowLight}
          >
            {changeEscapesToReal(JS_code)}
          </LanguageSyntaxHighlighter>
        </SubmissionSummaryCodeSection>
      )}
      <Button variant="green">자세히 보기</Button>
    </SubmissionSummaryLayout>
  );
};

export default SubmissionSummary;
