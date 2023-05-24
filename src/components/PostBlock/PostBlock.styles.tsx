import styled from "styled-components";

import { colors } from "@/style/theme";

export const PostBlockLayout = styled.div<{ active: boolean }>`
  padding: 16px 16px;
  background: ${({ active }) =>
    active ? `${colors.grey4}` : `${colors.white}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const PostDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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

export const NameTimeDiv = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 2px;
`;

export const NameSpan = styled.span`
  font-size: 14px;
  color: ${colors.grey1};
`;

export const TimeSpan = styled.span`
  font-size: 14px;
  color: ${colors.grey1};
`;

export const PostBlockTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PostBlockDataSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
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

export const OverallDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AvatarDiv = styled.div``;

export const ChevronDiv = styled.div`
  & > svg {
    width: 14px;
    height: 14px;

    path {
      fill: ${(props) => props.theme.colors.grey1};
    }
  }
`;
