import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import StyledAuthButton from '../../styled/buttons/StyledAuthButton';
import LogoForms from '../../../images/logoPantry.svg';
import StyledAuthInput from '../../styled/formElements/inputs/StyledAuthInput';
import StyledAuthLabel from '../../styled/formElements/labels/StyledAuthLabel';
import StyledAuthLink from '../../styled/typography/StyledAuthLink';
import P from '../../styled/typography/StyledP';
import { logIn } from '../../../database/controller';
import { authDataValidation, setErrorMessages } from '../../../helpers';
import H1 from '../../styled/typography/StyledAuthH1';

import StyledModalBackground from '../../styled/modal/elements/StyledModalBackground';
import StyledAuthForm from '../../styled/formElements/authForm/StyledAuthForm';

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

const ModalBackground = styled(StyledModalBackground)`
  ${({ cursorTypeWait }) =>
    cursorTypeWait &&
    css`
      cursor: wait;
    `}
`;

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
    testUser: {
      testLogin: 'guest@guest.pl',
      testPassword: 'guestguest',
    },
    errorMessages: {
      login: '',
      password: '',
    },
    cursorTypeWait: false,
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

    this.setState({ cursorTypeWait: true });

    logIn(login, password)
      .then(() => {
        this.setState({ cursorTypeWait: false });
      })
      .catch(err => {
        const errorMessages = setErrorMessages(err.message, 'login');
        this.setState({ errorMessages, cursorTypeWait: false });
      });
  };

  logInAsTestUser = e => {
    e.preventDefault();
    const { testLogin, testPassword } = this.state.testUser;

    this.setState({ cursorTypeWait: true });

    logIn(testLogin, testPassword).then(() => {
      this.setState({ cursorTypeWait: false });
    });
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

  // StyledAuthForm;

  render() {
    const { login, password, errorMessages, cursorTypeWait } = this.state;

    return (
      <ModalBackground cursorTypeWait={cursorTypeWait}>
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
      </ModalBackground>
    );
  }
}

export default LoginForm;
