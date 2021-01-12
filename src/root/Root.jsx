import React from 'react';
import { auth } from '../fbase';
import App from './app/App';
import Authorization from './authorization/Authorization';

class Root extends React.Component {
  state = {
    userDataLoading: true,
    registrationIsPending: false,
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      console.log('USER z LISTENERA:', user);

      this.setState({ userDataLoading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setRegistrationStatus = isPending => {
    console.log('JESTEM W REGISTRATION I MAM STATUS:', isPending);
    this.setState({ registrationIsPending: isPending });
  };

  authenticationConfirmed() {
    const { registrationIsPending } = this.state;
    let authConfirmed = false;

    if (auth.currentUser && !registrationIsPending) {
      authConfirmed = true;
    }

    return authConfirmed;
  }

  render() {
    const { userDataLoading, registrationIsPending } = this.state;

    return (
      <>
        {this.authenticationConfirmed() ? (
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
