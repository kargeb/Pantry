import React from 'react';
import { auth } from '../fbase';
import App from './app/App';
import Authorization from './authorization/Authorization';

class Root extends React.Component {
  state = {
    userDataLoading: true,
    registrationIsPending: false,
    authenticationConfirmed: false,
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      console.log('USER z LISTENERA:', user);

      this.setState({ userDataLoading: false }, () => this.checkAuthentication());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setRegistrationStatus = isPending => {
    console.log('JESTEM W REGISTRATION I MAM STATUS:', isPending);
    this.setState({ registrationIsPending: isPending }, () => this.checkAuthentication());
  };

  checkAuthentication() {
    const { registrationIsPending } = this.state;

    if (auth.currentUser && !registrationIsPending) {
      console.log('auth.currentUser z AUHENITE: ', auth.currentUser);
      console.log('!registrationIsPending z AUHENITE', !registrationIsPending);
      this.setState({ authenticationConfirmed: true });
    } else {
      console.log('NIE JESTEM SPOELNIONYM ATHENITACTEM');
      console.log('auth.currentUser z AUHENITE: ', auth.currentUser);
      console.log('!registrationIsPending z AUHENITE', !registrationIsPending);
      this.setState({ authenticationConfirmed: false });
    }
  }

  render() {
    const { userDataLoading, authenticationConfirmed } = this.state;

    return (
      <>
        {authenticationConfirmed ? (
          <App />
        ) : (
          <Authorization
            setRegistrationStatus={this.setRegistrationStatus}
            userDataLoading={userDataLoading}
          />
        )}
      </>
    );
  }
}

export default Root;
