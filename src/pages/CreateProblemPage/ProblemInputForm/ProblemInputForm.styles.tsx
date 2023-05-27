import styled, { css } from "styled-components";

const inputStyle = css`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
  border-radius: 999px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.grey1};
  }
`;

export const ProblemInputFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 100%;
  padding: 28px 32px 32px 32px;
`;

export const ProblemInputFormTitleInput = styled.input`
  ${inputStyle};
  font-size: 16px;
`;

export const ProblemInputFormTagAddButton = styled.button`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 6px 12px;
  border: none;
  border-radius: 999px;
  background-color: ${(props) => props.theme.colors.grey3 + "88"};
  font-size: 16px;
  transition: background-color 200ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey3 + "FF"};
  }

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export const ProblemInputFormTagList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const ProblemInputFormTagInputBox = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  width: 100%;
`;

export const ProblemInputFormFileSelectorBox = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
  border-radius: 4px;
`;

export const ProblemInputFormControlBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  width: 100%;
`;
