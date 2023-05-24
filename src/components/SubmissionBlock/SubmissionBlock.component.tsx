import React from "react";

import {
  ResultBox,
  ScoreWrap,
  OverallDiv,
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
    <ResultBox isActive={isActive} onClick={() => handleClick(id)}>
      <OverallDiv>
        {isSuccess && <PassDiv isSuccess={isSuccess}>통과</PassDiv>}
        {!isSuccess && <PassDiv isSuccess={isSuccess}>실패:{reason}</PassDiv>}
        <TimeDiv>
          {year}-{month}-{day} {hour}:{min}
        </TimeDiv>
        <UserInform>
          <Avatar src={avatarURL} size="small"></Avatar>
          {userName}
        </UserInform>
      </OverallDiv>
      <ScoreWrap>
        <ScoreDiv>
          <CircleChart
            score={totalScore}
            perfectScore={perfectScore * Object.keys(metricScores).length}
            size="medium"
            animation={true}
          />
          총점
        </ScoreDiv>

        {Object.entries(metricScores).map(([evaluation, currentScore]) => (
          <ScoreDiv key={evaluation}>
            <CircleChart
              score={currentScore}
              perfectScore={perfectScore}
              size="medium"
              animation={true}
            />
            {evaluation}
          </ScoreDiv>
        ))}
      </ScoreWrap>
      <RightChevron />
    </ResultBox>
  );
};

export default SubmissionBlock;
