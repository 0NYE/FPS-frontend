import styled from "styled-components";

export const LabeledInputInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey2};
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;

  &::placeholder {
    font-size: 15px;
    color: ${(props) => props.theme.colors.grey2};
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
  position: relative;
`;

export const LabeledInputWarningParagraph = styled.p`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -3px;
  left: 0;
  font-size: 13px;
  color: ${(props) => props.theme.colors.red};
  transform: translateY(100%);

  & > svg {
    width: 20px;
    height: 20px;
    margin: 2px 3px 0 0;
  }
`;
