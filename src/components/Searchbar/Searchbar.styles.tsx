import styled from "styled-components";

export const SearchBarLayout = styled.div`
  float: left;
  position: relative;
`;

export const SearchBarInput = styled.input.attrs({
  placeholder: "검색",
})`
  width: 94.5px;
  height: 28px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.grey4};
  box-sizing: border-box;
  font-size: 12px;
  outline: none;
  position: relative;
  color: ${(props) => props.theme.colors.black};
  &::placeholder {
    font-size: 12px;
    color: ${(props) => props.theme.colors.grey1};
  }
`;
