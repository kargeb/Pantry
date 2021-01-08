import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme, lightTheme } from '../themes/themes';
import Modal from '../components/templates/Modal';
import GlobalStyle from '../themes/GlobalStyle';

const Background = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  
  width: 100vw;
  background-color: transparent;
  /* color: ${props => props.theme.textPrimary}; */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  width: 300px;
  height: 300px;
`;

const Loader = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid #ffffff;
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    /* border-bottom: 1.1em solid #ffffff; */
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <Background>
    <Wrapper>
      <Loader>
        <div className="loader" />
      </Loader>
    </Wrapper>
  </Background>
);

export default Loading;
