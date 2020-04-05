import { createGlobalStyle } from 'styled-components';

const GlobalStyleDark = createGlobalStyle`

    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        color: white;
        background-color: #555;
    }

    .test{
        background-color: black;
        color: white
    }
`;

export default GlobalStyleDark;
