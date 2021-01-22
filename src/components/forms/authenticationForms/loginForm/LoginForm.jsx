import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyledAuthButton from '../../../styledComponents/buttons/StyledAuthButton';
import LogoForms from '../../../../images/logoPantry.svg';
import StyledAuthInput from '../../../styledComponents/formElements/inputs/StyledAuthInput';
import StyledAuthLabel from '../../../styledComponents/formElements/labels/StyledAuthLabel';
import StyledAuthLink from '../../../styledComponents/atoms/typography/StyledAuthLink';
import P from '../../../styledComponents/atoms/typography/P';
import { logIn, logOut } from '../../../../data/handlers';
import {
  authDataValidation,
  checkForEmptyValues,
  setErrorMessages,
  validation,
} from '../../../../helpers';
import H1 from '../../../styledComponents/atoms/typography/H1';

import StyledModalBackground from '../../../styledComponents/modal/elements/StyledModalBackground';
import StyledAuthForm from '../../../styledComponents/formElements/authForm/StyledAuthForm';

const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    position: fixed;
    width: 140px;
    top: 40px;
    left: 40px;
    width: 200px;
    transform: translateX(0);
  }
`;

const StyledH1 = styled(H1)`
  margin-top: 55px;

  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    margin-top: 10px;
  }
`;

class LoginForm extends Component {
  state = {
    login: 'test@test.p',
    password: 'testtest',
    testUser: {
      testLogin: 'test@test.pl',
      testPassword: 'testtest',
    },
    errorMessages: {
      login: '',
      password: '',
    },
  };

  handleForm = e => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;

    if (this.formHasInvalidData()) {
      return;
    }

    logIn(login, password)
      .then(resoult => console.log(resoult))
      .catch(err => {
        const errorMessages = setErrorMessages(err.message, 'login');
        this.setState({ errorMessages });
      });
  };

  logInAsTestUser = e => {
    e.preventDefault();
    const { testLogin, testPassword } = this.state.testUser;

    logIn(testLogin, testPassword).then(resoult => console.log(resoult));
  };

  formHasInvalidData = () => {
    const { login, password } = this.state;

    const errorMessages = authDataValidation(login, password);

    this.setState({ errorMessages });

    if (Object.keys(errorMessages).length === 0) {
      return false;
    } else {
      return true;
    }
  };

  StyledAuthForm;

  render() {
    const { login, password, errorMessages } = this.state;

    return (
      <StyledModalBackground>
        <StyledAuthForm>
          <Logo>
            <img src={LogoForms} alt="pantry application logo" width="100%" />
          </Logo>
          <StyledH1>Login</StyledH1>
          <P padding="20px" center>
            as guest
          </P>
          <StyledAuthButton type="button" onClick={this.logInAsTestUser}>
            Guest login
          </StyledAuthButton>
          <P padding="20px" center>
            or on your account
          </P>

          <StyledAuthLabel htmlFor="login">Email</StyledAuthLabel>
          <StyledAuthInput
            errorBorder={errorMessages.login}
            type="text"
            id="login"
            name="login"
            value={login}
            placeholder="test@test.pl"
            onChange={this.handleForm}
          />
          {errorMessages.login ? (
            <P error>{errorMessages.login}</P>
          ) : (
            <P error>&nbsp;</P>
          )}
          <StyledAuthLabel htmlFor="password" top="10px">
            Password
          </StyledAuthLabel>
          <StyledAuthInput
            errorBorder={errorMessages.password}
            type="password"
            id="password"
            name="password"
            placeholder="123456"
            value={password}
            onChange={this.handleForm}
          />
          {errorMessages.password ? (
            <P error>{errorMessages.password}</P>
          ) : (
            <P error>&nbsp;</P>
          )}
          <StyledAuthButton
            marginTop="20px"
            type="button"
            onClick={this.handleSubmit}
          >
            Login
          </StyledAuthButton>
          <Link to="/register">
            <P center padding="30px">
              or <StyledAuthLink>create your account</StyledAuthLink>
            </P>
          </Link>
        </StyledAuthForm>
      </StyledModalBackground>
    );
  }
}

export default LoginForm;
