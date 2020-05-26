import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  rootElement,
);
