import React from 'react';
import { auth } from '../fbase';

class App extends Component {
  state = {
    currentUser: '',
  };

  render() {
    return (
      <div>
        <h1>Im in the new Root</h1>
      </div>
    );
  }
}

export default App;
