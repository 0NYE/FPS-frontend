import styled from "styled-components";

export const ProblemBlockLayout = styled.div`
  width: 600px;
  height: 104px;
  padding: 16px 16px;
  background-color: ${(props) => props.theme.colors.grey4};
`;

export const ProblemBlockDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProblemBlockHeaderBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const ProblemBlockTitle = styled.h3`
  height: 16px;
  padding: 0px 3px;
  font-weight: bold;
  margin-bottom: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProblemBlockMetaDataBox = styled.div`
  height: 14px;
  font-size: 12px;
  margin-bottom: 12px;
`;

export const ProblemBlockMetaDataSpan = styled.span``;

export const ProblemBlockTagBox = styled.div``;

export const ProblemBlockTagList = styled.ul``;

export const TagSpan = styled.span`
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey3};
`;

export const ProblemBlockLanguageIconList = styled.ul`
  display: inline-block;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 150px;
`;
