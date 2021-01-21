import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonRectangle from '../../../styledComponents/atoms/buttonsNew/ButtonRectangle';
import LogoForms from '../../../../images/logoPantry.svg';
import Input from '../../../styledComponents/atoms/authFormsElements/Input';
import Label from '../../../styledComponents/atoms/authFormsElements/Label';
import SpanLink from '../../../styledComponents/atoms/typography/SpanLink';
import P from '../../../styledComponents/atoms/typography/P';
import Modal from '../../../styledComponents/molecules/Modal';
import Form from '../../../styledComponents/molecules/Form';
import { logIn, logOut } from '../../../../data/handlers';
import {
  authDataValidation,
  checkForEmptyValues,
  setErrorMessages,
  validation,
} from '../../../../helpers';
import H1 from '../../../styledComponents/atoms/typography/H1';

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

class AnotherLoginForm extends Component {
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

  render() {
    const { login, password, errorMessages } = this.state;

    return (
      <Modal>
        <Form>
          <Logo>
            <img src={LogoForms} alt="pantry application logo" width="100%" />
          </Logo>
          <StyledH1>Login</StyledH1>
          <P padding="20px" center>
            as guest
          </P>
          <ButtonRectangle type="button" onClick={this.logInAsTestUser}>
            Guest login
          </ButtonRectangle>
          <P padding="20px" center>
            or on your account
          </P>

          <Label htmlFor="login" left>
            Email
          </Label>
          <Input
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
          <Label htmlFor="password" left top="10px">
            Password
          </Label>
          <Input
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
          <ButtonRectangle
            marginTop="20px"
            type="button"
            onClick={this.handleSubmit}
          >
            Login
          </ButtonRectangle>
          <Link to="/register">
            <P center padding="30px">
              or <SpanLink>create your account</SpanLink>
            </P>
          </Link>
        </Form>
      </Modal>
    );
  }
}

export default AnotherLoginForm;
