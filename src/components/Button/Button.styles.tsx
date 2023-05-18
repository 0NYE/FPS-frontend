import styled, { css } from "styled-components";

export interface ButtonLayoutProps {
  variant?: "grey" | "black" | "green" | "red";
  outline?: boolean;
  size?: "small" | "large";
}

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border: none;
  cursor: pointer;

  ${({ variant }) =>
    ({
      grey: css`
        background-color: ${(props) => props.theme.colors.grey4};
        color: ${(props) => props.theme.colors.black};
      `,
      black: css`
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
      `,
      green: css`
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
      `,
      red: css`
        background-color: ${(props) => props.theme.colors.red};
        color: ${(props) => props.theme.colors.white};
      `,
    }[variant ?? "grey"])}

  ${({ outline }) =>
    outline &&
    css`
      border: 1px solid ${(props) => props.theme.colors.black};
    `}

  ${({ size }) =>
    ({
      small: css`
        padding: 4px 8px;
        border-width: 1px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
      `,
      large: css`
        padding: 8px 16px;
        border-width: 2px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: 700;
      `,
    }[size ?? "small"])}
`;
