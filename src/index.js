import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UniUiTheme } from './uiTheme'


import * as UniUI from './components'
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <UniUiTheme>
        <App />
    </UniUiTheme>
  </Router>,
  document.getElementById('root')
);

