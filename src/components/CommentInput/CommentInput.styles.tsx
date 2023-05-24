import styled from "styled-components";

export const CommentInputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  height: 128px;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.grey2};
  border-radius: 8px;
  background: ${(props) => props.theme.colors.grey4};
`;

export const CommentInputTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  resize: none;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.colors.grey1};
    opacity: 0.7;
  }
`;
