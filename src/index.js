import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import UniUiTheme from './uiTheme'

ReactDOM.render(
  <UniUiTheme>
    <App />
  </UniUiTheme>,
  document.getElementById('root')
);

