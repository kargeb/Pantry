import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        color: #333;
        background-color: #0d0d0d;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='78' height='78' fill-opacity='0.54' fill='%23292626'/%3E%3C/svg%3E");
    }

    body{
        font-family: 'Roboto', sans-serif;
        max-width: 600px;
        margin: 0 auto;
        height: 100vh;
        background-color: white;
        color: black
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
