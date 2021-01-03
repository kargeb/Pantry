import React from 'react';
import { auth } from '../fbase';
import Unauthorized from './Unauthorized';
import Authorized from './Authorized';

class App extends React.Component {
  state = {
    currentUserId: null,
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ currentUserId: user.uid });
      } else {
        console.log('NIE ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ currentUserId: null });
      }
    });
  }

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

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { currentUserId } = this.state;

    return (
      <div>{currentUserId ? <Authorized currentUserId={currentUserId} /> : <Unauthorized />}</div>
    );
  }
}

export default App;
