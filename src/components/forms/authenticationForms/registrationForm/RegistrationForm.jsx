import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  registerUserInUsersDatabase,
  addInitialCategoryToDatabase,
  addInitialProductToDatabase,
} from '../../../../data/handlers';
import {
  checkForEmptyValues,
  isEmailValid,
  isPasswordStrong,
  setErrorMessages,
} from '../../../../helpers';

import LogoForms from '../../../../images/logoForms.svg';
import Modal from '../../../styledComponents/molecules/Modal';
import Form from '../../../styledComponents/molecules/Form';
import P from '../../../styledComponents/atoms/typography/P';
import SpanLink from '../../../styledComponents/atoms/typography/SpanLink';
import Input from '../../../styledComponents/atoms/formElements/Input';
import Label from '../../../styledComponents/atoms/formElements/Label';
import ButtonRectangle from '../../../styledComponents/atoms/buttons/ButtonRectangle';

const Logo = styled.div`
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  /* background-color: red; */
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
    const { login, password } = this.state;
    // prettier-ignore
    let errorMessages = {};

    const emptyFieldsNames = checkForEmptyValues({ login, password });

    if (!isEmailValid(login)) {
      const newErrorMessages = setErrorMessages(
        'Nieprawidłowy adres email',
        'login',
      );

      errorMessages = { ...errorMessages, ...newErrorMessages };
      // this.setState({ errorMessages });
      // return false;
    }

    if (!isPasswordStrong(password)) {
      const newErrorMessages = setErrorMessages('Zbyt słabe haslo', 'password');

      // this.setState({ errorMessages });
      // return false;
      errorMessages = { ...errorMessages, ...newErrorMessages };
    }

    if (emptyFieldsNames.length !== 0) {
      const newErrorMessages = setErrorMessages(
        'Nie moze byc puste!',
        ...emptyFieldsNames,
      );

      errorMessages = { ...errorMessages, ...newErrorMessages };

      // this.setState({ errorMessages });
      // return false;
    }

    console.log('ERROS MESSAGES:', errorMessages);

    this.setState({ errorMessages });
    return false;
    // this.setState({
    //   errorMessages: {
    //     login: '',
    //     password: '',
    //   },
    // });

    // const { setRegistrationStatus } = this.props;
    // let newUserId = null;

    // setRegistrationStatus(true);

    // registerUserInUsersDatabase(login, password)
    //   .then(idObtainedFromDatabase => {
    //     newUserId = idObtainedFromDatabase;
    //     return newUserId;
    //   })
    //   .then(() => {
    //     //  new user registration in ProductsDatabase is done by adding first product
    //     return addInitialProductToDatabase(newUserId);
    //   })
    //   .then(() => {
    //     return addInitialCategoryToDatabase(newUserId);
    //   })
    //   .then(() => {
    //     console.log('Registration succeeded');
    //     setRegistrationStatus(false);
    //   });
  };

  render() {
    const { login, password, errorMessages } = this.state;

    return (
      <Modal>
        <Form paddingTop="60px">
          <Logo>
            <img src={LogoForms} alt="pantry application logo" width="100%" />
          </Logo>
          <P padding="20px" center>
            create your account
          </P>
          <Label htmlFor="login" left>
            Email
          </Label>
          <Input
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
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={this.handleForm}
          />
          {/* <br /> */}
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
          {/* <br /> */}
          <Link to="/login">
            <P padding="20px">
              or <SpanLink>login on existing account</SpanLink>
            </P>
          </Link>
        </Form>
      </Modal>
    );
  }
}

export default RegistrationForm;
