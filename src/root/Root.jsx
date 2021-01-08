import React from 'react';
import { auth } from '../fbase';
import Authorization from './authorization/Authorization';
import App from './app/App';

class Root extends React.Component {
  state = {
    userDataLoading: true,
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ userDataLoading: false });
      } else {
        this.setState({ userDataLoading: false });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { userDataLoading } = this.state;

    return (
      <div>
        <div>
          {auth.currentUser ? <App /> : <Authorization userDataLoading={userDataLoading} />}
        </div>
      </div>
    );
  }
}

export default Root;
