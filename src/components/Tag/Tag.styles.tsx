import styled from "styled-components";

export const TagLayout = styled.div`
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey3};
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
