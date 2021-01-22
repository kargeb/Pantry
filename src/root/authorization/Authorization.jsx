import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from '../../themes/themes';
import GlobalStyle from '../../themes/GlobalStyle';
import RegistrationForm from '../../components/pages/register/RegistrationForm';
import Loading from '../../views/Loading';
// import LoginForm from '../../components/forms/authenticationForms/loginForm/LoginForm';
import LoginForm from '../../components/pages/login/LoginForm';

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
    // backgroundImage: `url(${`${process.env.PUBLIC_URL}/pantry.jpg`})`,
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/loginBackgroundMirror.jpg`})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    // transform: 'scaleX(-1)',
  };

  return (
    <Router>
      <div style={imageBackgroundStyles}>
        <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
          <GlobalStyle />
          <StyledMain>
            {userDataLoading ? (
              <>
                <Loading />
              </>
            ) : (
              <Switch>
                <Route exact path="/" component={LoginForm} />
                {/* <Route path="/pantry" component={LoginForm} /> */}
                <Route
                  path="/register"
                  render={props => (
                    <RegistrationForm
                      {...props}
                      setRegistrationStatus={setRegistrationStatus}
                    />
                  )}
                />
                <Route component={LoginForm} />
              </Switch>
            )}
          </StyledMain>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default Authorization;
