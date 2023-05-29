import styled from "styled-components";

export const ProblemBlockLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 16px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.black};
  transition: background-color 220ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey4};
  }
`;

export const ProblemBlockDataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  gap: 4px;
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

export const ProblemBlockLanguageIconList = styled.ul`
  display: flex;
  gap: 8px;
`;
