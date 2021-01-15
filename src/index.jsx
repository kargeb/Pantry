import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from './experiments/stepper/Stepper';
import Root from './root/Root';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Stepper />
    {/* <Root /> */}
  </React.StrictMode>,
  rootElement,
);
