import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonRectangle from '../../../styledComponents/atoms/buttons/ButtonRectangle';
import LogoForms from '../../../../images/logoForms.svg';
import Input from '../../../styledComponents/atoms/formElements/Input';
import Label from '../../../styledComponents/atoms/formElements/Label';
import A from '../../../styledComponents/atoms/typography/A';
import P from '../../../styledComponents/atoms/typography/P';
import Modal from '../../../styledComponents/molecules/Modal';
import Form from '../../../styledComponents/molecules/Form';

// import A from "../../../styledComponents/atoms/typography/A"

const Logo = styled.div`
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
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
    error: false,
  };

  // handleForm = e => {
  //   const { value } = e.target;
  //   this.setState({ [e.target.name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { login, password } = this.state;

  //   const emptyFieldsNames = checkForEmptyValues({ login, password });

  //   if (emptyFieldsNames.length !== 0) {
  //     const errorMessages = setErrorMessages(
  //       'Nie moze byc puste!',
  //       ...emptyFieldsNames,
  //     );

  //     this.setState({ errorMessages });
  //     return false;
  //   }

  //   logIn(login, password).then(resoult => console.log(resoult));
  // };

  // logInAsTestUser = e => {
  //   e.preventDefault();
  //   const { testLogin, testPassword } = this.state.testUser;

  //   logIn(testLogin, testPassword).then(resoult => console.log(resoult));
  // };

  // handleLogout = e => {
  //   logOut();
  // };

  render() {
    const { error } = this.state;
    // const { login, password, errorMessages } = this.state;

    return (
      <Modal>
        <Form paddingTop="60px">
          <Logo>
            <img src={LogoForms} width="100%" />
          </Logo>
          {/* <H1 marginBottomDouble>Logowaniiiie</H1> */}
          <P padding="20px" center>
            logging as guest
          </P>
          <ButtonRectangle type="submit" onClick={e => e.preventDefault()}>
            Guest login
          </ButtonRectangle>
          <P padding="20px" center>
            or logging on your account
          </P>

          <Label htmlFor="login" left>
            Email
          </Label>
          <Input
            type="text"
            id="login"
            name="login"
            // value={login}
            // onChange={this.handleForm}
          />
          {error ? (
            <P error>Password has to have at least 6 characters</P>
          ) : (
            <P error>&nbsp;</P>
          )}
          <Label htmlFor="password" left top="10px">
            Password
          </Label>
          <Input
            type="text"
            id="password"
            name="password"
            // value={password}
            // onChange={this.handleForm}
          />
          {error ? (
            <P error>Password has to have at least 6 characters</P>
          ) : (
            <P error>&nbsp;</P>
          )}
          <ButtonRectangle
            marginTop="20px"
            type="submit"
            onClick={e => e.preventDefault()}
          >
            Login
          </ButtonRectangle>
          <Link to="/register">
            <P padding="20px">
              or <A>create ow account</A>
            </P>
          </Link>
        </Form>
      </Modal>
    );
  }
}

export default AnotherLoginForm;
