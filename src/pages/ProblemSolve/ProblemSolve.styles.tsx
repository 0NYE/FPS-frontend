import styled from "styled-components";

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
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  height: 32px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const EditorBox = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
  padding-top: 8px;
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
