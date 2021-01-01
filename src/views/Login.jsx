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
    userEmail: '',
    userId: null,
    isAlertVisible: false,
  };

  render() {
    const { isAlertVisible } = this.state;

    return (
      <StyledMain pantry={pantry}>
        <Modal>
          <H1 marginBottomDouble>Logowanie</H1>
          <Label htmlFor="email" alignLeft>
            Login
          </Label>
          <Input type="text" id="email" />
          <Label htmlFor="password" alignLeft>
            {' '}
            Password
          </Label>
          <Input type="text" id="password" />
          <Button> Zaloguj</Button>
          {isAlertVisible && <Alert>There are empty fields!</Alert>}
        </Modal>
      </StyledMain>
    );
  }
}

export default Login;
