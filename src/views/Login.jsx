import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../components/templates/Modal';
import H1 from '../components/atoms/texts/H1';
import Button from '../components/atoms/buttons/Button';
import Label from '../components/atoms/formElements/Label';
import Alert from '../components/molecules/Alert';
import Input from '../components/atoms/formElements/Input';

const StyledMain = styled.main`
  height: 100vh;
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

class Login extends Component {
  state = {
    userEmail: '',
    userId: null,
    isAlertVisible: false,
  };

  render() {
    const { isAlertVisible } = this.state;

    return (
      <StyledMain>
        <Modal>
          <H1 marginBottomDouble>Logowanie</H1>
          <Label htmlFor="email" />
          <Input type="text" id="email" />
          <Label htmlFor="password" />
          <Input type="text" id="password" />
          <Button> Zaloguj</Button>
          {isAlertVisible && <Alert>There are empty fields!</Alert>}
        </Modal>
      </StyledMain>
    );
  }
}

export default Login;
