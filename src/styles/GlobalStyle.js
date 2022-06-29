import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import '../assets/fonts/font.css'


// 모바일 100vh가 필요한곳에서
// height: calc(var(--vh, 1vh) * 100); 이렇게 사용하기

const GlobalStyle = createGlobalStyle`
    ${reset};
    :root {
        --vh: 100%;
    }
    *, *::before, *::after {
        box-sizing: border-box;
      }
      
    html, body {
      overscroll-behavior-y: contain;
    }

    body {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        min-height: 100vh;
        height: -webkit-fill-available;
        min-height: -webkit-fill-available;
        word-break: break-all;
    }
    body {
    font-family: "Noto Sans Korean", sans-serif;
    }
`;

export default GlobalStyle;