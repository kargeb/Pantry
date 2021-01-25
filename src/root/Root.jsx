import React from 'react';
import { auth } from '../database/firebaseConfig';
import App from './app/App';
import Authorization from './authorization/Authorization';

class Root extends React.Component {
  state = {
    userDataLoading: true,
    registrationIsPending: false,
    authenticationConfirmed: false,
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(() => {
      this.setState({ userDataLoading: false }, () =>
        this.checkAuthentication(),
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setRegistrationStatus = isPending => {
    this.setState({ registrationIsPending: isPending }, () =>
      this.checkAuthentication(),
    );
  };

  checkAuthentication() {
    const { registrationIsPending } = this.state;

    if (auth.currentUser && !registrationIsPending) {
      this.setState({ authenticationConfirmed: true });
    } else {
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
