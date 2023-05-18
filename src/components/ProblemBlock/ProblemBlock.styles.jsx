import styled from "styled-components";

export const ProblemBlockLayout = styled.div`
  width: 600px;
  height: 104px;
  padding: 16px 16px;
  background-color: ${(props) => props.theme.colors.grey4};
`;

export const ProblemWrap = styled.div`
  display: inline-block;
`;

export const ProblemTitle = styled.div`
  height: 16px;
  padding: 0px 3px;
  font-weight: bold;
  margin-bottom: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ProblemMetaData = styled.div `
  height: 14px;
  font-size: 12px;
  margin-bottom: 12px;
`;

export const TagData = styled.div`
  height: 3px;
`;

export const TagBox = styled.div`
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey3};
`;

export const LanguageBox = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 150px;
`;
