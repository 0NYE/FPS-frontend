import styled from "styled-components";

import { colors } from "@/style/theme";

export const FileSubmitLayout = styled.div<{ isFileSubmitted: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 150px;
  height: 97px;
  border: 2px solid
    ${({ isFileSubmitted }) =>
      isFileSubmitted ? `${colors.green}` : `${colors.grey1}`};
  border-radius: 4px;
  background-color: ${colors.grey4};
`;

export const FileSubmitHeader = styled.div<{ isFileSubmitted: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  color: ${({ isFileSubmitted }) =>
    isFileSubmitted ? `${colors.green}` : `${colors.grey1}`};
`;

export const FileSubmitSVG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const FileSubmitBottom = styled.div<{ isFileSubmitted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isFileSubmitted }) =>
    isFileSubmitted ? `${colors.green}` : `${colors.grey1}`};
`;

export const FileLabel = styled.label`
  width: 100%;
  height: 100%;
`;

export const FileButton = styled.button`
  width: 100%;
  height: 100%;
`;

export const FileInput = styled.input.attrs({
  type: "file",
})`
  display: none;
`;
