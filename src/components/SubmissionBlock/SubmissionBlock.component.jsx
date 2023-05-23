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
}) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear(); 
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  const calculateTotalScore = (metricScores) => {
    let totalScore = 0;
    Object.values(metricScores).forEach((score) => {
      totalScore += score;
    });
    return totalScore;
  };
  return (
    <>
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
              score={calculateTotalScore(metricScores)}
              perfectScore={perfectScore * Object.keys(metricScores).length}
              size="medium"
              animation={true}
            />
            총점
          </ScoreDiv>

          {Object.entries(metricScores).map(([string, number]) => (
            <ScoreDiv key={string}>
              <CircleChart
                score={number}
                perfectScore={perfectScore}
                size="medium"
                animation={true}
              />
              {string}
            </ScoreDiv>
          ))}
        </ScoreWrap>
        <RightChevron />
      </ResultBox>
    </>
  );
}

export default SubmissionBlock;
