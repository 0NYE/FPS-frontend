import styled from "styled-components";

export const LabeledInputInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey2};
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const LabeledInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

export const LabeledInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 330px;
`;
