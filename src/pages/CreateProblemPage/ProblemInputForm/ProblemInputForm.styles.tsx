import styled, { css } from "styled-components";

const inputStyle = css`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey4};
  font-size: 14px;
  outline: none;
`;

export const ProblemInputFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  height: 100%;
  padding: 32px;
`;

export const ProblemInputFormTitleInput = styled.input`
  ${inputStyle};
`;

export const ProblemInputFormTagList = styled.ul`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const ProblemInputFormTagInputBox = styled.div`
  position: relative;
  width: 100%;

  & > button {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
  }

  & > ${ProblemInputFormTagList} {
    position: absolute;
    left: 0;
    top: calc(100% + 4px);
  }
`;

export const ProblemInputFormTagInput = styled.input`
  ${inputStyle};
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
