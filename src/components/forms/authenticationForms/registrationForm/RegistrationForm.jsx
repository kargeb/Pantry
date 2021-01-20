import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  registerUserInUsersDatabase,
  addInitialCategoryToDatabase,
  addInitialProductToDatabase,
} from '../../../../data/handlers';
import {
  validation,
  setErrorMessages,
  authDataValidation,
} from '../../../../helpers';

import LogoForms from '../../../../images/logoPantry.svg';
import Modal from '../../../styledComponents/molecules/Modal';
import Form from '../../../styledComponents/molecules/Form';
import P from '../../../styledComponents/atoms/typography/P';
import SpanLink from '../../../styledComponents/atoms/typography/SpanLink';
import Input from '../../../styledComponents/atoms/authFormsElements/Input';
import Label from '../../../styledComponents/atoms/authFormsElements/Label';
import ButtonRectangle from '../../../styledComponents/atoms/buttonsNew/ButtonRectangle';
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

class RegistrationForm extends Component {
  state = {
    login: '',
    password: '',
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

    if (this.formHasInvalidData()) {
      return;
    }

    this.registerUser();
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

  registerUser = () => {
    const { login, password } = this.state;
    const { setRegistrationStatus } = this.props;
    let newUserId = null;

    setRegistrationStatus(true);

    registerUserInUsersDatabase(login, password)
      .then(idObtainedFromDatabase => {
        newUserId = idObtainedFromDatabase;
        return newUserId;
      })
      .then(() => {
        //  new user registration in ProductsDatabase is done by adding first product
        return addInitialProductToDatabase(newUserId);
      })
      .then(() => {
        return addInitialCategoryToDatabase(newUserId);
      })
      .then(() => {
        console.log('Registration succeeded');
        setRegistrationStatus(false);
      })
      .catch(err => {
        const errorMessages = setErrorMessages(err.message, 'login');
        this.setState({ errorMessages });
      });
  };

  render() {
    const { login, password, errorMessages } = this.state;

    return (
      <Modal>
        <Form paddingTop="60px">
          <Logo>
            <img src={LogoForms} alt="pantry application logo" width="100%" />
          </Logo>
          <StyledH1>Register</StyledH1>
          <P padding="20px" center>
            new account
          </P>
          <Label htmlFor="login" left>
            Email
          </Label>
          <Input
            errorBorder={errorMessages.login}
            type="email"
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
            Hasło
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
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </ButtonRectangle>
          <Link to="/login">
            <P center padding="20px">
              or <SpanLink>login on existing account</SpanLink>
            </P>
          </Link>
        </Form>
      </Modal>
    );
  }
}

export default RegistrationForm;
