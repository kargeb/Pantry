import React from 'react';
import { auth } from '../fbase';
import Unauthorized from './Unauthorized';
import Authorized from './Authorized';

class App extends React.Component {
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
        {/* {isLoading ? (
          <Loading />
        ) : ( */}
        <div>
          {auth.currentUser ? (
            <Authorized currentUserId={currentUserId} />
          ) : (
            <Unauthorized isLoading={isLoading} />
          )}
        </div>
        {/* )} */}
        {/* {console.log(' UTHI CUREMNT:', auth.currentUser)} */}
        {/* {auth.currentUser ? <Authorized /> : <Unauthorized />} */}
      </div>
    );
  }
}

export default App;
