import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonRectangle from '../../../styledComponents/atoms/buttonsNew/ButtonRectangle';
import LogoForms from '../../../../images/logoForm2.svg';
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

const Logo = styled.div`
  position: relative;
  top: -70px;
  /* left: calc(50% - 50px); */
  width: 100px;
  height: 100px;
  /* z-index: 99999; */
  /* background-color: red; */
`;

const TempLogoutButton = styled(ButtonRectangle)`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 100px;
  /* height: 50px; */
  z-index: 9999999;
  border: none;
  /* background-color: red; */
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

  handleLogout = e => {
    logOut();
  };

  formHasInvalidData = () => {
    const { login, password } = this.state;

    const errorMessages = authDataValidation(login, password);

    if (Object.keys(errorMessages).length === 0) {
      console.log('NIE MA BLEDOW, MOZNA WYSYLAC');
      this.setState({ errorMessages });
      return false;
    } else {
      console.log('SA BLEDY, TRZEBA ZATRZYMAC!!!!!!!');
      this.setState({ errorMessages });
      return true;
    }
  };

  render() {
    const { login, password, errorMessages } = this.state;

    return (
      <Modal>
        <TempLogoutButton type="button" onClick={this.handleLogout}>
          Logout
        </TempLogoutButton>
        <Form>
          {/* <Form paddingTop="60px"> */}
          <Logo>
            <img src={LogoForms} alt="pantry application logo" width="100%" />
          </Logo>
          <P padding="20px" center>
            logging as guest
          </P>
          <ButtonRectangle type="button" onClick={this.logInAsTestUser}>
            Guest login
          </ButtonRectangle>
          <P padding="20px" center>
            or logging on your account
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
            type="text"
            id="password"
            name="password"
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
            <P padding="20px">
              or <SpanLink>create your account</SpanLink>
            </P>
          </Link>
        </Form>
      </Modal>
    );
  }
}

export default AnotherLoginForm;
