import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import App from './views/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
