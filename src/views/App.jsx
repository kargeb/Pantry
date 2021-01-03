import React from 'react';
import { auth } from '../fbase';

class App extends React.Component {
  state = {
    currentUserId: '',
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ currentUserId: user.uid });
      } else {
        console.log('NIE ZALOGOWANY z LISTENERA w LOGIN:', user);
        this.setState({ currentUserId: user.uid });
      }
    });
  }

  render() {
    const { currentUserId } = this.state;

    return (
      <div>
        <h1>Im in the new Root</h1>
        <p>Current User: {currentUserId}</p>
        {currentUserId ? (
          <p>JEST TO BO JEST UZYTKOWNIK {currentUserId}</p>
        ) : (
          <p>NIE MA TEGO BO NIE MA UZYTKOWNIKA {currentUserId} </p>
        )}
      </div>
    );
  }
}

export default App;
