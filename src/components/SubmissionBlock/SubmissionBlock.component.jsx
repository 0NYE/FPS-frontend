import React from 'react';

import { 
  ResultBox,
  ScoreWrap, 
  OverallDiv,
  UserInform,
  TimeDiv,
  PassDiv,
  ScoreDiv,
   } from './SubmissionBlock.styles';

import Avatar from '../Avatar/Avatar.component';
import { CircleChart } from '../CircleChart/CircleChart.component';

import {ReactComponent as RightChevron} from '@/assets/images/RightChevron.svg'

const SubmissionBlock = ({
  isSuccess,
  reason,
  userName,
  avatarURL,
  perfectScore,
  metricScores,
  handleClick,
  isClick,
  year,
  month,
  day,
  hour,
  min,
}) => {
  const totalScore = Object.values(metricScores).reduce((totalScore, score) => totalScore + score);
  return (
    <ResultBox active={isClick} onClick={handleClick}>
      <OverallDiv>
        {isSuccess&&<PassDiv isSuccess={isSuccess}>통과</PassDiv>}
        {!isSuccess&&<PassDiv isSuccess={isSuccess}>실패:{reason}</PassDiv>}
        <TimeDiv>{year}-{month}-{day} {hour}:{min}</TimeDiv>
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
}

export default SubmissionBlock;
