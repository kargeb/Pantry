import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        color: #333;
        background-color: #ddd;
    }

`;

export default GlobalStyle;
