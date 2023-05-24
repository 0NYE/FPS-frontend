import React from "react";

import {
  SubmissionBlockLayout,
  SubmissionBlockLeftColumn,
  SubmissionBlockInfoBox,
  SubmissionBlockScoreBox,
  UserInform,
  TimeDiv,
  PassDiv,
  ScoreDiv,
} from "./SubmissionBlock.styles";

import Avatar from "../Avatar/Avatar.component";
import { CircleChart } from "../CircleChart/CircleChart.component";

import { ReactComponent as RightChevron } from "@/assets/images/RightChevron.svg";

interface SubmissionBlockProps {
  id: string;
  isSuccess: boolean;
  reason?: string;
  userName: string;
  avatarURL: string;
  perfectScore: number;
  metricScores: {
    [K: string]: number;
  };
  handleClick: (submissionId: string) => void;
  isActive: boolean;
  date: Date;
}

const SubmissionBlock = ({
  id,
  isSuccess,
  reason = "",
  userName,
  avatarURL,
  perfectScore,
  metricScores,
  handleClick,
  isActive,
  date,
}: SubmissionBlockProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const totalScore = Object.values(metricScores).reduce(
    (totalScore, score) => totalScore + score
  );

  return (
    <SubmissionBlockLayout isActive={isActive} onClick={() => handleClick(id)}>
      <SubmissionBlockLeftColumn>
        <SubmissionBlockInfoBox>
          {isSuccess && <PassDiv isSuccess={isSuccess}>통과</PassDiv>}
          {!isSuccess && <PassDiv isSuccess={isSuccess}>실패:{reason}</PassDiv>}
          <TimeDiv>
            {year}-{month}-{day} {hour}:{min}
          </TimeDiv>
          <UserInform>
            <Avatar src={avatarURL} size="small"></Avatar>
            {userName}
          </UserInform>
        </SubmissionBlockInfoBox>
        <SubmissionBlockScoreBox>
          <ScoreDiv>
            <CircleChart
              score={totalScore}
              perfectScore={perfectScore * Object.keys(metricScores).length}
              size="small"
              animation={false}
            />
            총점
          </ScoreDiv>
          {Object.entries(metricScores).map(([evaluation, currentScore]) => (
            <ScoreDiv key={evaluation}>
              <CircleChart
                score={currentScore}
                perfectScore={perfectScore}
                size="small"
                animation={false}
              />
              {evaluation}
            </ScoreDiv>
          ))}
        </SubmissionBlockScoreBox>
      </SubmissionBlockLeftColumn>
      <RightChevron />
    </SubmissionBlockLayout>
  );
};

export default SubmissionBlock;
