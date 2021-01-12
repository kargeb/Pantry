import React from 'react';
import { auth } from '../fbase';
import Authorization from './authorization/Authorization';
import App from './app/App';

class Root extends React.Component {
  state = {
    userDataLoading: true,
    registrationIsPending: true,
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

  changeRegistrationState(isPending) {
    this.setState({ registrationIsPending: isPending });
  }

  render() {
    const { userDataLoading, registrationIsPending } = this.state;

    return (
      <>
        {!registrationIsPending ? (
          <App />
        ) : (
          <Authorization
            changeRegistrationState={this.changeRegistrationState}
            userDataLoading={userDataLoading}
          />
        )}
      </>
    );
    // return (
    //   <>
    //     <Authorization userDataLoading={userDataLoading} />
    //   </>
    // );
  }
}

export default Root;
