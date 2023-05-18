import styled, { css } from "styled-components";

interface TabItemProps {
  isSelected: boolean;
}

export const TabItem = styled.li<TabItemProps>`
  flex: 1 0 auto;
  padding: 16px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.grey1};
  text-align: center;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.black};
      font-weight: bold;
    `}
`;

export const TabLayout = styled.ul`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey4};
`;
