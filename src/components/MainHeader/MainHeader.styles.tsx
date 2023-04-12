import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

export const MainHeaderNavLink = styled(NavLink)`
  font-size: 16x;
  color: ${(props) => props.theme.colors.grey1};
  transition: color 150ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const MainHeaderNavListItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

  &:has(${MainHeaderNavLink}.active) {
    border-bottom: 2px solid ${(props) => props.theme.colors.black};

    ${MainHeaderNavLink} {
      margin-top: 2px;
      color: ${(props) => props.theme.colors.black};
    }
  }
`;

export const MainHeaderNavList = styled.ul`
  display: flex;
  gap: 12px;
  height: 100%;
`;

export const MainHeaderNav = styled.nav``;

export const MainHeaderRightRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 16px;
  height: 100%;
`;

export const MainHeaderLoginLink = styled(Link)`
  color: ${(props) => props.theme.colors.grey1};
`;

export const MainHeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey3};
  font-size: 16px;
`;
