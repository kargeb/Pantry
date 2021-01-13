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
  addInitialCategoryToDatabase,
  addInitialProductToDatabase,
} from '../data/handlers';

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
      });
  };

  handleLogout = e => {
    logOut();
  };

  render() {
    const { isAlertVisible, login, password } = this.state;

    return (
      <Modal>
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
      </Modal>
    );
  }
}

export default Login;
