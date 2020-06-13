import { createGlobalStyle } from 'styled-components';
// import device from './mediaBreakPoints';

const GlobalStyle = createGlobalStyle`


    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,500&display=swap');

    *,*::before, *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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


    ${'' /* @media ${device.laptop} {
   body{

   }

  } */}
    

`;

export default GlobalStyle;
