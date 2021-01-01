import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../components/templates/Modal';
import H1 from '../components/atoms/texts/H1';
import Button from '../components/atoms/buttons/Button';
import Label from '../components/atoms/formElements/Label';
import Alert from '../components/molecules/Alert';
import Input from '../components/atoms/formElements/Input';
import pantry from '../images/pantry.jpg';

const StyledMain = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${props => props.theme.textPrimary};
  /* background-color: ${props => props.theme.primary}; */
  background-size: cover;
  background-position: bottom;
  background-image: url(${props => props.pantry});
`;

class Login extends Component {
  state = {
    login: '',
    password: '',
    userId: null,
    isAlertVisible: false,
  };

  handleForm = e => {
    const { value } = e.target;

    console.log('e traget name & value', value, e.target.name);

    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    console.log('JESTEM W HANDLE SUBIM');
    e.preventDefault();
    console.log('ZE STANU:', this.state.login, this.state.password);
  };

  render() {
    const { isAlertVisible } = this.state;

    return (
      <StyledMain pantry={pantry}>
        <Modal>
          <H1 marginBottomDouble>Logowanie</H1>
          <Label htmlFor="login" alignLeft>
            Login
          </Label>
          <Input
            type="text"
            id="login"
            name="login"
            value={this.state.login}
            onChange={this.handleForm}
          />
          <Label htmlFor="password" alignLeft>
            Password
          </Label>
          <Input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleForm}
          />
          <Button type="submit" onClick={this.handleSubmit}>
            Zaloguj
          </Button>
          {isAlertVisible && <Alert>There are empty fields!</Alert>}
        </Modal>
      </StyledMain>
    );
  }
}

export default Login;
