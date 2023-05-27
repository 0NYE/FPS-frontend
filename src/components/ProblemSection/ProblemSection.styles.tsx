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
