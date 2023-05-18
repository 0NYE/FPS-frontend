import styled from "styled-components";

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
`;

export const SingleSearch = styled.input.attrs({
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

export const Glasses = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 16px;
  height: 16px;
  margin: auto;
  left: 80%;
  bottom: 10%;
`;

export const GlassesCircle = styled.span`
  width: 9px;
  height: 9px;
  border: 2px solid ${(props) => props.theme.colors.grey1};
  border-radius: 50%;
`;

export const GlassesLine = styled.span`
  width: 6px;
  border: 1px solid ${(props) => props.theme.colors.grey1};
  border-radius: 1px;
  transform: translate3d(6px, 0.5px, 0) rotate(45deg);
  // background-color: ${(props) => props.theme.colors.black};
`;
