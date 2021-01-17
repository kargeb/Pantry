import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import Button from '../../../atoms/buttons/Button';
import Label from '../../../atoms/formElements/Label';
import Input from '../../../atoms/formElements/Input';
import { logIn, logOut } from '../../../../data/handlers';
import { checkForEmptyValues, setErrorMessages } from '../../../../helpers';
// import * as S from '../../../styled';
import * as S from './LoginFormNewStyled';
import LogoForms from '../../../../images/logoForms.svg';

const Logo = styled.div`
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  /* background-color: red; */
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
    // const { login, password, errorMessages } = this.state;

    return (
      <S.Modal>
        <S.Form>
          <Logo>
            <img src={LogoForms} width="100%" />
          </Logo>
          {/* <H1 marginBottomDouble>Logowaniiiie</H1> */}
          <S.P center>logging as guest</S.P>
          <S.GuestLoginButton type="submit">Guest login</S.GuestLoginButton>
          <S.P center>or logging on your own account</S.P>

          <S.Label htmlFor="login" left>
            Email
          </S.Label>
          <S.Input
            type="text"
            id="login"
            name="login"
            // value={login}
            // onChange={this.handleForm}
          />
          {/* {errorMessages.login && <p>{errorMessages.login}</p>} */}
          <S.Label htmlFor="password" left>
            Hasło
          </S.Label>
          <S.Input
            type="text"
            id="password"
            name="password"
            // value={password}
            // onChange={this.handleForm}
          />
          {/* {errorMessages.password && <p>{errorMessages.password}</p>} */}
          {/* <br /> */}
          <S.Button type="submit">Login</S.Button>
          {/* <Button type="submit">Login</Button> */}
          {/* <br />
        <Button type="submit">Login as Test User</Button>
        <br /> */}
          {/* <Link to="/register"> */}
          {/* <Button type="button" onClick={() => {}}>
          Rejestracja
        </Button> */}
          {/* </Link> */}
          {/* <br /> */}
          <S.P>
            or <S.A>crete your ow account</S.A>
          </S.P>
          {/* <Button type="submit">Wyloguj</Button> */}
        </S.Form>
      </S.Modal>
    );
  }
}

export default LoginForm;
