import styled from "styled-components";

export const ResultBox= styled.div`
  display:flex;
  width:100%;
  height:100%;
  padding: 16px 8px;
  background: ${({ theme,isClick }) => (isClick ? theme.colors.green : theme.colors.grey4)};
  justify-content: space-between;
  align-items: center;
`;

export const OverallDiv=styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
`;

export const PassDiv=styled.div`
  font-weight:bold;
  color:${({ theme,isSuccess }) => (isSuccess ? theme.colors.green : theme.colors.red)}
`;

export const TimeDiv=styled.div`
  color:${({theme})=>theme.colors.grey1}
`;

export const UserInform=styled.div`
  color:${({theme})=>theme.colors.grey1}
`;

export const ScoreWrap= styled.div`
  display:flex;
  flex-direction:row;
  
`;

export const ScoreDiv= styled.div`
  display:flex;
  flex-direction:column;
  margin:12px;
  justify-content: center;
  align-items: center;
`;
