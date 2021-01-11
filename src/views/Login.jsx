import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../components/templates/Modal';
import H1 from '../components/atoms/texts/H1';
import Button from '../components/atoms/buttons/Button';
import Label from '../components/atoms/formElements/Label';
import Alert from '../components/molecules/Alert';
import Input from '../components/atoms/formElements/Input';
import { auth } from '../fbase';

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
    isAlertVisible: false,
  };

  handleForm = e => {
    const { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, password } = this.state;
    console.log('ZE STANU:', login, password);

    auth
      .signInWithEmailAndPassword(login, password)
      .then(user => {
        console.log('JESTEM ZALOGOWANY! ', user);
        console.log('USER EMAIL: ', user.user.email);
      })
      .catch(error => {
        console.log('BLAD LOGOWANIA:');
        console.log(error.code, error.message);
      });
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
