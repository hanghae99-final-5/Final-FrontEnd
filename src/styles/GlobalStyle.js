import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


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
    body {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        min-height: 100vh;
    }
`;

export default GlobalStyle;