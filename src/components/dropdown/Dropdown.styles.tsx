import styled from "styled-components";

export const DropDownBoxWrap = styled.div`
  position: absolute;
  top:26px;
  left:0%;
  display: inline-block;
`;

export const DropDownContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid ${(props) => props.theme.colors.grey3};
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5px;
  list-style: none;
  padding: 1px;
  z-index: 1;
  margin-top: 0.2rem;
  :hover {
    background: ${(props) => props.theme.colors.grey4};
  }
`;

export const ChevronDown =styled.span`
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    display: inline-block;
    height: 0.5rem;
    left: 5%;
    top: -2px;
    position: relative;
    transform: rotate(135deg);
    vertical-align: middle;
    width: 0.5rem;
`;

export const CategoryMenuBox = styled.button`
  width: 100%
  height: 100%;
  font-weight: 500;
  font-size: 5px;
  align-items: center;
  display: flex;
  padding: 8px;
  border:none;
  border-radius: 4px;
  position: relative;
  background-color: ${(props) => props.theme.colors.grey4};
`;
