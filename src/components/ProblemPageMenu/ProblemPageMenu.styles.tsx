import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const ProblemPageMenuLayout = styled.nav`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.grey4};
`;

export const ProblemPageMenuLink = styled(NavLink)`
  padding: 4px 8px;
  border: 1px solid ${(props) => props.theme.colors.grey1};
  border-radius: 4px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey1};

  &.active,
  &[data-active] {
    border-color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ProblemPageMenuList = styled.ul`
  display: flex;
  gap: 12px;
`;
