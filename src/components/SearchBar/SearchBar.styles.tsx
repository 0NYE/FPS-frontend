import styled from "styled-components";

export const SearchBarLayout = styled.div`
  position: relative;
`;

export const SearchBarInput = styled.input`
  width: 100px;
  padding: 8px 12px 8px 30px;
  border: none;
  border-radius: 4px;
  outline: none;
  background: ${(props) => props.theme.colors.grey4};
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;

  &::placeholder {
    font-size: 13px;
    color: ${(props) => props.theme.colors.grey1};
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 100%;
  transform: scale(0.85);
`;
