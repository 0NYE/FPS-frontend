import styled, { css } from "styled-components";

const inputStyle = css`
  width: 100%;
  padding: 12px 20px;
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
`;

export const ProblemInputFormTagList = styled.ul`
  display: flex;
  gap: 8px;
  /* width: 100%; */
`;

export const ProblemInputFormTagInputBox = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  width: 100%;
`;

export const ProblemInputFormDescriptionTextArea = styled.textarea`
  ${inputStyle};
  height: 100%;
  resize: none;
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
