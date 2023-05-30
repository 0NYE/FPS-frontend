import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.black};
    font-family: 'Noto Sans KR', sans-serif;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    overflow: hidden;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
