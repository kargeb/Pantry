import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../components/templates/Modal';
import H1 from '../components/atoms/texts/H1';
import Button from '../components/atoms/buttons/Button';
import Label from '../components/atoms/formElements/Label';
import Alert from '../components/molecules/Alert';
import Input from '../components/atoms/formElements/Input';
import pantry from '../images/pantry.jpg';
import { auth } from '../fbase';

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
    login: 'test@test.p',
    password: 'testtest',
    userId: null,
    isAlertVisible: false,
    pending: true,
  };

  handleLogout = e => {
    auth
      .signOut()
      .then(() => {
        console.log('WYLOGOWANO');
      })
      .catch(error => {
        console.log('Jakis blad');
      });
  };

  zalogowany = () => {
    this.props.logIn(true);
  };

  funkcja = () => {
    return console.log('COS');
  };

  componentDidMount() {
    console.log('CZY TRZA CZEKAC?', this.state.pending);
    console.log('ZALADOWALEM SIE');
    console.log(auth.currentUser);
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('ZALOGOWANY z LISTENERA w LOGIN:', user);
        // this.zalogowany();
        this.setState({ pending: false });
        this.props.logIn(true);
        // console.log('CZY TRZA CZEKAC?', this.state.pending);
        // this.funkcja.call(this);
      } else {
        console.log('NIE ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ pending: false });
        this.props.logIn(false);
        // console.log('CZY TRZA CZEKAC?', this.state.pending);
      }
    });
  }

  componentDidUpdate() {
    console.log('W DID UPDATE SIE');
    console.log('current user:', auth.currentUser);
    console.log('CZY TRZA CZEKAC? Z UPDATE', this.state.pending);
  }

  componentWillUnmount() {
    // console.log('CZY TRZA CZEKAC? Z UPDATE', this.state.pending);
    this.unsubscribe();
  }

  handleForm = e => {
    const { value } = e.target;

    console.log('e traget name & value', value, e.target.name);

    this.setState({ [e.target.name]: value });
  };

  // checkCurrentUser = () => {
  //   auth().currentUser;
  // };

  handleSubmit = e => {
    e.preventDefault();

    const { login, password } = this.state;
    console.log('ZE STANU:', login, password);

    auth
      .signInWithEmailAndPassword(login, password)
      .then(user => {
        console.log('JESTEM ZALOGOWANY! ', user);
        console.log('USER EMAIL: ', user.user.email);
        this.setState({ user: { email: user.user.email, uid: user.user.uid } });
        this.props.logIn(true);
      })
      .catch(error => {
        console.log('BLAD LOGOWANIA:');
        console.log(error.code, error.message);
      });
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
          <br />
          <Button type="submit" onClick={this.handleSubmit}>
            Zaloguj
          </Button>
          <br />
          <Button type="submit" onClick={this.handleLogout}>
            Wyloguj
          </Button>
          {isAlertVisible && <Alert>There are empty fields!</Alert>}
        </Modal>
      </StyledMain>
    );
  }
}

export default Login;
