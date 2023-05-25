import styled from "styled-components";

export const ProblemListPageLayout = styled.div``;

export const ProblemListPageMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 800px;
  margin: 32px auto;
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
