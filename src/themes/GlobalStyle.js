import { createGlobalStyle } from 'styled-components';
import device from './mediaBreakPoints';

const GlobalStyle = createGlobalStyle`


    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,500&display=swap');

    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        ${'' /* color: #333; */}
        background-color: #0d0d0d;
        ${'' /* background-color: ${props => props.themeee.primary}; */}
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='78' height='78' fill-opacity='0.54' fill='%23292626'/%3E%3C/svg%3E");
    }

    body{
        position: relative;
        font-family: 'Roboto', sans-serif;
        ${'' /* max-width: 400px; */}
        margin: 0 auto;
        height: 100vh;
    }

    header{
        height: 70px;
    }

    main{
        height: calc(100vh - 70px);
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: inherit
    }

    ${
      '' /* disable arrow buttons added by browser inside Input in changeQuantityForm  */
    }
    input[type=number].withoutSpinButtons::-webkit-inner-spin-button,
    input[type=number].withoutSpinButtons::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    select {
        cursor: pointer;
    }


    @media ${device.laptop} {
   body{
    ${'' /* color: blue; */}
   }

  }
    

`;

export default GlobalStyle;
