import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from '../../themes/themes';
import GlobalStyle from '../../themes/GlobalStyle';
import LoginForm from '../../components/forms/authenticationForm/loginForm/LoginForm';
import Loading from '../../views/Loading';

const StyledMain = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.textPrimary};
  background-size: cover;
  background-position: bottom;
  /* background-image: url(${props => props.pantry}); */
`;

const Authorization = ({ userDataLoading, setRegistrationStatus }) => {
  const imageBackgroundStyles = {
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/pantry.jpg`})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  };

  return (
    <div style={imageBackgroundStyles}>
      <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
        <GlobalStyle />
        <StyledMain>
          {userDataLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <LoginForm setRegistrationStatus={setRegistrationStatus} />
          )}
        </StyledMain>
      </ThemeProvider>
    </div>
  );
};

export default Authorization;
