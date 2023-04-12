import styled from "styled-components";

export const SocialLoginButtonParagraph = styled.p`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const SocialLoginButtonSvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  border-right: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const SocialLoginButtonLayout = styled.button`
  display: flex;
  align-items: center;
  width: 250px;
  margin: 50px 50px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.grey3};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  transition: background-color 100ms, border-color 100ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey4};
    border-color: ${(props) => props.theme.colors.grey2};
    cursor: pointer;
  }
`;
