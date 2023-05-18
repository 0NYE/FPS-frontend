import styled from "styled-components";

export const ProblemBlockLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 16px 16px;
  background-color: ${(props) => props.theme.colors.grey4};
  color: ${(props) => props.theme.colors.black};
`;

export const ProblemBlockDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProblemBlockHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const ProblemBlockTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const ProblemBlockMetaDataBox = styled.div`
  display: flex;
`;

export const ProblemBlockMetaDataSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;

  & > svg {
    width: 14px;
    height: 14px;
    margin: 2px;
  }
`;

export const ProblemBlockTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProblemBlockTagList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const ProblemBlockTagSpan = styled.span`
  display: block;
  padding: 4px 6px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.grey3};
  font-size: 13px;
`;

export const ProblemBlockLanguageIconList = styled.ul`
  display: flex;
  gap: 8px;
`;
