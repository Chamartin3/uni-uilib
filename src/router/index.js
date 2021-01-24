import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";



import Buttons from '../pages/Buttons'
import Cards from '../pages/Cards'
import Dialogs from '../pages/Dialogs'
import TextFields from '../pages/TextFields'

const paths = {
  Buttons,
  Cards,
  Dialogs,
  TextFields
}

const ROUTER = () => {
  let location = useLocation();
    return (
          <Switch location={location}>
            <Route path="/Buttons" component={Buttons}/>
            <Route path="/Cards" component={Cards}/>
            <Route path="/Dialogs" component={Dialogs}/>
            <Route path="/TextFields" component={TextFields}/>
          </Switch>
    );
  }

export default ROUTER
