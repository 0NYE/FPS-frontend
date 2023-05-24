import styled from "styled-components";

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  padding: 16px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const TimeDiv = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.grey1};
`;

export const CommentTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const CommentDisplayer = styled.div`
  font-size: 14px;
`;

export const CommentBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommentDataSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 16px;
  color: ${(props) => props.theme.colors.grey1};

  & > svg {
    width: 14px;
    height: 14px;

    margin-right: 4px;

    path {
      fill: ${(props) => props.theme.colors.grey1};
    }
  }
`;
