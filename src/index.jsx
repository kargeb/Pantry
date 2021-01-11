import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/Root';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  rootElement,
);
