import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UniUiTheme } from './uiTheme'
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <UniUiTheme>
        <App />
    </UniUiTheme>
  </Router>,
  document.getElementById('root')
);

