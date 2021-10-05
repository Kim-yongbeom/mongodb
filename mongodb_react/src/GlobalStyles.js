import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`   // 전역 css 관리
  ${reset}  // css reset
  html {
    font-size: 10px; //10px = 1rem
  }
  em {
    font-weight: bolder;
    color : skyblue;
  }
`;

export default GlobalStyles;
