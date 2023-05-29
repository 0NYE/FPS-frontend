import styled, { css } from "styled-components";

export const SolveSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;
  height: 100%;
`;

export const EditorControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  width: 100%;
  height: 42px;
  padding: 0 8px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const LanguageButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const LanguageButton = styled.button<{
  color?: string;
  active?: boolean;
}>`
  padding: 4px 8px;
  border: 1px solid ${(props) => props.color};
  border-radius: 3px;
  background-color: ${(props) => (props.active ? props.color : "transparent")};
  color: ${(props) => (props.active ? props.theme.colors.white : props.color)};
  font-size: 13px;
  cursor: pointer;
  transition: background-color 220ms ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? props.color : props.color + "20"};
  }
`;

export const AdditionalControlBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const EditorToolButton = styled.button`
  display: flex;
  position: relative;
  padding: 4px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey4};

    & > svg {
      stroke: ${(props) => props.theme.colors.grey1};
    }
  }

  & > svg {
    width: 15px;
    height: 15px;
    stroke: ${(props) => props.theme.colors.grey3};
  }
`;

export const EditorBox = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
  padding: 8px 0 0 4px;
  border-top: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const UserCodeRenderBoxWrapper = styled.div`
  padding: 0px 16px;
`;

export const UserCodeRenderBox = styled.div`
  height: 500px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const SubmissionControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  gap: 32px;
  padding: 0px 16px;
`;

export const ProgressBarBox = styled.div`
  position: relative;
  width: 75%;

  & > span {
    position: absolute;
    top: 0;
    right: -25px;
  }
`;
