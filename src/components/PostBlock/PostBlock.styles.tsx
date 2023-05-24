import styled from "styled-components";

import { colors } from "@/style/theme";

export const PostBox = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  padding: 16px 8px;
  background: ${({ active }) =>
    active ? `${colors.grey4}` : `${colors.white}`};
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PostTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const PostDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const NameTimeDiv = styled.div`
  display: flex;
`;

export const NameTimeSpan = styled.span<{ active: boolean }>`
  display: flex;
  padding: 4px 6px;
  border-radius: 2px;
  background: ${({ active }) =>
    active ? `${colors.grey4}` : `${colors.white}`};
  font-size: 13px;
  color: ${colors.grey1};
`;

export const PostBlockTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PostBlockDataSpan = styled.span<{ active: boolean }>`
  display: flex;
  padding: 4px 6px;
  border-radius: 2px;
  background: ${({ active }) =>
    active ? `${colors.grey4}` : `${colors.white}`};
  font-size: 13px;

  & > svg {
    width: 14px;
    height: 14px;
    margin: 2px;
  }
`;

export const OverallDiv = styled.div`
  flex-direction: column;
`;

export const AvatarDiv = styled.div``;

export const ChevronDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 14px;
    height: 14px;
    margin: 2px;
  }
`;
