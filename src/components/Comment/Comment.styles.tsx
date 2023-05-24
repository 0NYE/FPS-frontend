import styled from "styled-components";

export const CommentBox = styled.div`
  width: 500;
  height: 84;
  display: flex;
  flex-direction: column;
`;

export const CommentHeader = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: space-between;
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TimeDiv = styled.div``;

export const CommentTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const CommentDisplayer = styled.div`
  font-size: 14px;
`;

export const CommentBottom = styled.div`
  display:flex
  flex-direction: row;
`;

export const CommentDataSpan = styled.span`
  align-items: center;
  margin-right: 8px;

  & > svg {
    width: 14px;
    height: 14px;
    margin: 2px;
  }
`;
