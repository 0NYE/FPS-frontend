import styled, { css } from "styled-components";

import { TagSize } from "@/components/Tag/Tag.component";

export const TagLayout = styled.div<{ size: TagSize }>`
  border-radius: 999px;
  background-color: ${(props) => props.theme.colors.grey3 + "88"};
  transition: background-color 200ms ease;
  cursor: pointer;

  ${({ size }) =>
    ({
      small: css`
        padding: 4px 8px;
        font-size: 13px;
      `,
      medium: css`
        padding: 6px 12px;
        font-size: 16px;
      `,
    }[size])}

  &:hover {
    background-color: ${(props) => props.theme.colors.grey3 + "FF"};
  }
`;

export const TagDeleteButton = styled.button`
  margin-right: -6px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  border: none;
  transition: color 150ms ease;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.red};
  }
`;
