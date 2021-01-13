import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../../../templates/Modal';
import H1 from '../../../atoms/texts/H1';
import Button from '../../../atoms/buttons/Button';
import Label from '../../../atoms/formElements/Label';
import Input from '../../../atoms/formElements/Input';
import { logIn, logOut } from '../../../../data/handlers';

class LoginForm extends Component {
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

  handleLogout = e => {
    logOut();
  };

  render() {
    const { login, password } = this.state;

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
        <Button type="submit" onClick={() => {}}>
          Zarejestruj nowe konto ->
        </Button>
        <br />
        <Button type="submit" onClick={this.handleLogout}>
          Wyloguj
        </Button>
      </Modal>
    );
  }
}

export default LoginForm;
