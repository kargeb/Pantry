import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from '../../themes/themes';
import GlobalStyle from '../../themes/GlobalStyle';
import RegistrationForm from '../../components/pages/register/RegistrationForm';
import Loading from './loading/Loading';
import LoginForm from '../../components/pages/login/LoginForm';
import Contact from '../../components/shared/contact/Contact';

const StyledMain = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.textPrimary};
  background-size: cover;
  background-position: bottom;
  /* cursor: wait; */
`;

const Authorization = ({ userDataLoading, setRegistrationStatus }) => {
  const imageBackgroundStyles = {
    backgroundImage: `url(${`${process.env.PUBLIC_URL}/loginBackground.jpg`})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
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
          <Contact auth blur />
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default Authorization;
