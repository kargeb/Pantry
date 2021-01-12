import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../components/templates/Modal';
import H1 from '../components/atoms/texts/H1';
import Button from '../components/atoms/buttons/Button';
import Label from '../components/atoms/formElements/Label';
import Alert from '../components/molecules/Alert';
import Input from '../components/atoms/formElements/Input';
import {
  logIn,
  logOut,
  registerUserInUsersDatabase,
  registerUserInProductDatabase,
  addInitialCategoryToDatabase,
  addInitialProductToDatabase,
} from '../data/handlers';

const StyledMain = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.textPrimary};
  background-size: cover;
  background-position: bottom;
  /* background-image: url(${props => props.pantry}); */
`;

class Login extends Component {
  state = {
    login: 'test@test.p',
    password: 'testtest',
    testUser: {
      testLogin: 'test@test.pl',
      testPassword: 'testtest',
    },
    isAlertVisible: false,
  };

  handleForm = e => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;

    logIn(login, password).then(resoult => console.log(resoult));
  };

  logInAsTestUser = e => {
    e.preventDefault();
    const { testLogin, testPassword } = this.state.testUser;

    logIn(testLogin, testPassword).then(resoult => console.log(resoult));
  };

  register = e => {
    e.preventDefault();
    const { login, password } = this.state;
    let newUserId = null;

    registerUserInUsersDatabase(login, password)
      .then(userId => {
        console.log('ZAREJESTROWANO UZYTKOWNIKA Z ID: ', userId);
        newUserId = userId;
        return newUserId;
      })
      .then(userId => {
        console.log('DODAJEMY PRODKT DO BAZY INITIAL z uzytkownikiem:', userId);
        return addInitialProductToDatabase(userId);
      })
      .then(result => {
        console.log('DODALISMY PRODUKTY DO BAZY, TEARZ KATEGORIE:', result);
        console.log('A USERID NOWY TO JEST TAKI::', newUserId);
        return addInitialCategoryToDatabase(newUserId);
      })
      .then(result => console.log('KONIEC!!!:', result));
  };

  handleLogout = e => {
    logOut();
  };

  render() {
    const { isAlertVisible, login, password } = this.state;

    return (
      // <StyledMain>
      // <Modal>
      <>
        <H1 marginBottomDouble>Logowanie</H1>
        <Label htmlFor="login" alignLeft>
          Email
        </Label>
        <Input type="text" id="login" name="login" value={login} onChange={this.handleForm} />
        <Label htmlFor="password" alignLeft>
          Hasło
        </Label>
        <Input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={this.handleForm}
        />
        <br />
        <Button type="submit" onClick={this.handleSubmit}>
          Login
        </Button>
        <br />
        <Button type="submit" onClick={this.logInAsTestUser}>
          Login as Test User
        </Button>
        <br />
        <Button type="submit" onClick={this.register}>
          Register
        </Button>
        <br />
        <Button type="submit" onClick={this.handleLogout}>
          Wyloguj
        </Button>
        {isAlertVisible && <Alert>There are empty fields!</Alert>}
      </>
      // </Modal>
      // </StyledMain>
    );
  }
}

export default Login;
