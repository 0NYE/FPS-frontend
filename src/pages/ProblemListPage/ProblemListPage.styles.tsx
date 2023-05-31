import styled from "styled-components";

export const ProblemListPageLayout = styled.div`
  margin-top: 66px;
`;

export const ProblemListPageMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 16px auto;
`;

export const ProblemListControlBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ProblemBlockList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  & > li {
    width: 100%;
  }
`;
