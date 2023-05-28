import styled from "styled-components";

export const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 30px;
    height: 30px;
    margin-right: 2px;
  }
`;

export const LogoParagraph = styled.p`
  padding-bottom: 4px;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  color: #000;
`;
