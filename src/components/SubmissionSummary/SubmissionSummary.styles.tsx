import styled from "styled-components";

export const SubmissionSummaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  padding: 16px;

  & > a {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export const SubmissionSummaryHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SubmissionSummaryHeaderTextBox = styled.div``;

export const SubmissionSummaryHeaderTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
`;

export const SubmissionSummaryHeaderDateParagraph = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.grey1};
`;

export const SubmissionSummaryScoreList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const SubmissionSummaryScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 108px;
  font-size: 16px;
`;

export const SubmissionsSummaryDiffImage = styled.img``;

export const SubmissionSummaryCodeSection = styled.section`
  max-width: 100%;
  overflow-x: auto;
`;

export const SubmissionSummaryCodetitle = styled.h3`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
`;
