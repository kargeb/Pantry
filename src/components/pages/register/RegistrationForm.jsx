import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  registerUserInUsersDatabase,
  addInitialCategoryToDatabase,
  addInitialProductToDatabase,
} from '../../../database/controller';
import { setErrorMessages, authDataValidation } from '../../../helpers';

import LogoForms from '../../../images/logoPantry.svg';
import P from '../../styled/typography/StyledP';
import StyledAuthLink from '../../styled/typography/StyledAuthLink';
import StyledAuthInput from '../../styled/formElements/inputs/StyledAuthInput';
import StyledAuthLabel from '../../styled/formElements/labels/StyledAuthLabel';
import StyledAuthButton from '../../styled/buttons/StyledAuthButton';
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

class RegistrationForm extends Component {
  state = {
    login: '',
    password: '',
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

    if (this.formHasInvalidData()) {
      return;
    }

    this.registerUser();
  };

  formHasInvalidData = () => {
    const { login, password } = this.state;

    const errorMessages = authDataValidation(login, password);

    if (Object.keys(errorMessages).length === 0) {
      this.setState({ errorMessages });
      return false;
    } else {
      this.setState({ errorMessages });
      return true;
    }
  };

  registerUser = () => {
    const { login, password } = this.state;
    const { setRegistrationStatus } = this.props;
    let newUserId = null;

    setRegistrationStatus(true);
    this.setState({ cursorTypeWait: true });

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
        setRegistrationStatus(false);
        this.setState({ cursorTypeWait: false });
      })
      .catch(err => {
        const errorMessages = setErrorMessages(err.message, 'login');
        this.setState({ errorMessages, cursorTypeWait: false });
      });
  };

  render() {
    const { login, password, errorMessages, cursorTypeWait } = this.state;

    return (
      <ModalBackground cursorTypeWait={cursorTypeWait}>
        <StyledAuthForm>
          <Logo>
            <img src={LogoForms} alt="pantry application logo" width="100%" />
          </Logo>
          <StyledH1>Register</StyledH1>
          <P padding="20px" center>
            new account
          </P>
          <StyledAuthLabel htmlFor="login">Email</StyledAuthLabel>
          <StyledAuthInput
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
          <StyledAuthLabel htmlFor="password" top="10px">
            Hasło
          </StyledAuthLabel>
          <StyledAuthInput
            errorBorder={errorMessages.password}
            type="password"
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
          <StyledAuthButton
            marginTop="20px"
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </StyledAuthButton>
          <Link to="/login">
            <P center padding="20px">
              or <StyledAuthLink>login on existing account</StyledAuthLink>
            </P>
          </Link>
        </StyledAuthForm>
      </ModalBackground>
    );
  }
}

export default RegistrationForm;
