import styled, { css } from "styled-components";

export const ProblemSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px 16px 0 16px;
`;

export const ProblemTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ProblemDescription = styled.p`
  font-size: 14px;
  height: 100%;
`;

export const ProblemRenderBox = styled.div`
  min-height: 500px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const ProblemTipParagraph = styled.p`
  min-height: 48px;
  line-height: 48px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey1};
  text-align: right;
`;

export const SolveSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;
  height: 100%;
`;

export const EditorControlBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  height: 36px;
  padding: 0 8px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const LanguageButton = styled.button<{
  color?: string;
  active?: boolean;
}>`
  padding: 4px 8px;
  border: 1px solid ${(props) => props.color};
  border-radius: 3px;
  background-color: ${(props) => (props.active ? props.color : "transparent")};
  color: ${(props) => (props.active ? props.theme.colors.white : props.color)};
  font-size: 13px;
  cursor: pointer;
`;

export const EditorBox = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
  padding: 8px 0 0 4px;
  border-top: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const UserCodeRenderBoxWrapper = styled.div`
  padding: 0px 16px;
`;

export const UserCodeRenderBox = styled.div`
  min-height: 500px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const SubmissionControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  gap: 32px;
  padding: 0px 16px;
`;

export const ProgressBarBox = styled.div`
  width: 75%;
`;
