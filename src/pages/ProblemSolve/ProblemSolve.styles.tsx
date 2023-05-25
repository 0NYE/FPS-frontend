import styled from "styled-components";

export const ProblemSectionLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
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
`;

export const ProblemTipParagraph = styled.p`
  min-height: 24px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey1};
  text-align: right;
`;
