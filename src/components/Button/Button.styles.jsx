import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${(props) => props.buttonColor};
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-size:16px;
    
    &:hover {
        border: 2px solid black;
      }
`;

export const StyledTapButton = styled.button`
    background-color: ${(props) => (props.clicked ? props.theme.colors.black : props.theme.colors.white)};
    color: ${(props) => (props.clicked ? props.theme.colors.white : props.theme.colors.black)};
    padding: 8px 16px;
    border: 2px solid ${props=>props.theme.colors.grey3};
    border-radius: 4px;
`;

