import styled from "styled-components";

export const ProblemSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  height: 100%;
  padding: 16px 16px 0 16px;
`;

export const ProblemTextSection = styled.section`
  flex: 1 1 0;
  overflow: auto;
`;

export const ProblemTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const ProblemTagList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const ProblemRenderBox = styled.div`
  min-height: 500px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const ProblemTipParagraph = styled.p`
  height: 48px;
  line-height: 48px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey1};
  text-align: right;
`;
