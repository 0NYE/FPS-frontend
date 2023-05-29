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

export const ProblemPageHeaderControls = styled.div`
  display: flex;
  align-items: center;
`;

export const ProblemPageHeaderNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey1};
  transition: color 150ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.black};

    & > svg {
      stroke: ${(props) => props.theme.colors.black};
    }
  }

  & > svg {
    stroke: ${(props) => props.theme.colors.grey1};
    width: 16px;
    height: 16px;
    margin: 1px 2px 0 0;
    transition: stroke 150ms ease;
  }
`;

export const ProblemPageHeaderLoginLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.grey1};
`;

export const ProblemPageHeaderNextLinkBox = styled.div<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  & > a {
    pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  }
`;

export const ProblemPageHeaderNextLink = styled(NavLink)`
  display: flex;
  margin: 16px;
  padding: 10px;
  border-radius: 6px;
  background-color: #e7e7e786;
  transition: background-color 180ms ease;

  &:hover {
    background-color: #e7e7e7ff;

    & > svg {
      stroke: ${(props) => props.theme.colors.blue};
    }
  }

  & > svg {
    width: 12px;
    height: 12px;
  }
`;
