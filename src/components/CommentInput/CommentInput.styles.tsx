import styled from "styled-components";

export const InputBoxContainer = styled.div`
  position: relative;
`;

export const InputBox = styled.textarea`
  width: 500px;
  height: 123px;
  background: ${(props) => props.theme.colors.grey4};
  border: 1px solid ${(props) => props.theme.colors.grey2};
  border-radius: 4px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};

  ::placeholder {
    color: ${(props) => props.theme.colors.grey1};
    opacity: 0.7;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 68%;
  top: 78%;
  transform: translateY(-50%);
`;
