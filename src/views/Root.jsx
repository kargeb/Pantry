import React from 'react';
import { auth } from '../fbase';
import Authorization from './Authorization';
import App from './App';

class Root extends React.Component {
  state = {
    isLoading: true,
    currentUserId: null,
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ currentUserId: user.uid, isLoading: false });
      } else {
        console.log('NIE ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ currentUserId: null, isLoading: false });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { isLoading, currentUserId } = this.state;

    return (
      <div>
        <div>
          {auth.currentUser ? (
            <App currentUserId={currentUserId} />
          ) : (
            <Authorization isLoading={isLoading} />
          )}
        </div>
      </div>
    );
  }
}

export default Root;
