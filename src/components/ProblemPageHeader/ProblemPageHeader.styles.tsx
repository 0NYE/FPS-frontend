import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const ProblemPageHeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
  font-size: 16px;
`;

export const ProblemPageHeaderLoginButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey1};
  cursor: pointer;
  transition: color 150ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ProblemPageHeaderNavLink = styled(NavLink)`
  font-size: 16x;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey1};
  transition: color 150ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const ProblemPageHeaderLoginLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey1};
`;
