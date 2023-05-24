import styled from "styled-components";

export const ResultBox = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 8px;
  background: ${(props) =>
    props.isActive
      ? `${props.theme.colors.green}`
      : `${props.theme.colors.grey4}`};
  justify-content: space-between;
  align-items: center;
`;

export const OverallDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const PassDiv = styled.div<{ isSuccess: boolean }>`
  font-weight: bold;
  color: ${(props) =>
    props.isSuccess
      ? `${props.theme.colors.green}`
      : `${props.theme.colors.red}`};
`;

export const TimeDiv = styled.div`
  color: ${(props) => props.theme.colors.grey1};
`;

export const UserInform = styled.div`
  color: ${(props) => props.theme.colors.grey1};
`;

export const ScoreWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  justify-content: center;
  align-items: center;
`;
