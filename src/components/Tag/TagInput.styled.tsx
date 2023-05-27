import styled, { css } from "styled-components";

import { TagSize } from "@/components/Tag/Tag.component";

export const TagInputLayout = styled.div<{ size: TagSize }>`
  position: relative;
  border-radius: 999px;
  background-color: ${(props) => props.theme.colors.grey3 + "88"};
  outline: none;

  ${({ size }) =>
    ({
      small: css`
        min-width: 21px;
        padding: 4px 8px;
        font-size: 13px;
      `,
      medium: css`
        min-width: 28px;
        padding: 6px 12px;
        font-size: 16px;
      `,
    }[size])}
`;
