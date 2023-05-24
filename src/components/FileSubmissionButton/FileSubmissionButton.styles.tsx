import styled from "styled-components";

import { colors } from "@/style/theme";

export const FileSubmissionButtonLayout = styled.div<{
  isFileSubmitted: boolean;
}>`
  width: 150px;
  padding: 8px;
  border: 2px solid
    ${({ isFileSubmitted }) =>
      isFileSubmitted ? `${colors.green}` : `${colors.grey1}`};
  border-radius: 4px;
  background-color: ${colors.grey4};
`;

export const FileSubmissionButtonHeader = styled.div<{
  isFileSubmitted: boolean;
}>`
  color: ${({ isFileSubmitted }) =>
    isFileSubmitted ? `${colors.green}` : `${colors.grey1}`};
  font-weight: 700;
  font-size: 16px;
`;

export const FileSubmissionButtonSvgBox = styled.div`
  & > svg {
    width: 20px;
    height: 20px;
  }
`;

export const FileSubmissionFooter = styled.div<{ isFileSubmitted: boolean }>`
  color: ${({ isFileSubmitted }) =>
    isFileSubmitted ? `${colors.green}` : `${colors.grey1}`};
  font-size: 14px;
`;

export const FileSubmissionButtonLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
`;

export const FileButton = styled.button`
  width: 100%;
  height: 100%;
`;

export const FileInput = styled.input`
  display: none;
`;
