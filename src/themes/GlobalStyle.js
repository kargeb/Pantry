import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,500&display=swap');

    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        color: #333;
        background-color: #ddd;
    }

    body{
        font-family: 'Roboto', sans-serif;
        max-width: 600px;
        margin: 0 auto;
    }

    .test{
        background-color: red;
        color: blue
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: inherit
    }

`;

export default GlobalStyle;
