import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from '../../themes/themes';
import GlobalStyle from '../../themes/GlobalStyle';
import LoginForm from '../../components/forms/authenticationForms/loginForm/LoginFormOld';
import LoginFormNew from '../../components/forms/authenticationForms/loginForm/LoginFormNew';
import RegistrationForm from '../../components/forms/authenticationForms/registrationForm/RegistrationForm';
import Loading from '../../views/Loading';
import AnotherLoginForm from '../../components/forms/authenticationForms/loginForm/LoginForm';

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
                {/* <Route exact path="/" component={LoginForm} /> */}
                {/* <Route path="/pantry" component={LoginForm} /> */}
                {/* <Route exact path="/" component={LoginFormNew} />
                <Route path="/pantry" component={LoginFormNew} /> */}
                <Route exact path="/" component={AnotherLoginForm} />
                <Route path="/pantry" component={AnotherLoginForm} />
                {/* <Route path="/register" component={RegistrationForm} /> */}
                <Route
                  path="/register"
                  render={props => (
                    <RegistrationForm
                      {...props}
                      setRegistrationStatus={setRegistrationStatus}
                    />
                  )}
                />
                <Route component={AnotherLoginForm} />
                {/* <Route component={LoginForm} /> */}
                {/* <Route component={LoginFormNew} /> */}
              </Switch>
            )}
          </StyledMain>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default Authorization;
