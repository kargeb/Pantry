import React from 'react';
import AppContext from '../../context';

const SettingsView = () => (
  <AppContext.Consumer>
    {context => (
      <div>
        <h1>Settings</h1>
        <button onClick={context.toggleDarkmode}>Change Theme</button>
      </div>
    )}
  </AppContext.Consumer>
);

export default SettingsView;
