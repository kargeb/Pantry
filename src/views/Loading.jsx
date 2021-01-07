import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme, lightTheme } from '../themes/themes';
import pantry from '../images/pantry.jpg';
import Modal from '../components/templates/Modal';
import GlobalStyle from '../themes/GlobalStyle';

const StyledMain = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.textPrimary};
  background-size: cover;
  background-position: bottom;
  background-image: url(${pantry});
`;

const Loading = () => (
  <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
    <GlobalStyle />
    <StyledMain>
      <Modal>
        <div>wczytuje</div>
      </Modal>
    </StyledMain>
  </ThemeProvider>
);

export default Loading;
