import styled from "styled-components";

export const SubmissionBlockLayout = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  background: ${(props) =>
    props.isActive
      ? `${props.theme.colors.green}`
      : `${props.theme.colors.grey4}`};
  cursor: pointer;
`;

export const SubmissionBlockLeftColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const SubmissionBlockInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 160px;
`;

export const PassDiv = styled.div<{ isSuccess: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) =>
    props.isSuccess
      ? `${props.theme.colors.green}`
      : `${props.theme.colors.red}`};
`;

export const TimeDiv = styled.div`
  color: ${(props) => props.theme.colors.grey1};
  font-size: 12px;
`;

export const UserInform = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${(props) => props.theme.colors.grey1};
  font-size: 12px;
`;

export const SubmissionBlockScoreBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 68px;
  font-size: 12px;
`;
