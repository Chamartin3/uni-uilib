import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

import routes from './routes'


const Router = () => {
  let location = useLocation();
    return (
      <Switch location={location}>
        {routes.map( (comp, idx) => (
          <Route path={`/${comp.name}`} component={comp.component} key={idx} /> ))
        }
      </Switch>
    )
}

export default Router
