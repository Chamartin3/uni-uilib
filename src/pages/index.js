import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";


import Dialogs from './DialogsPage.jsx'
import Buttons from './ButonPage.jsx'
import Cards from './CardsPage.jsx'
import Fields from './FieldsPage.jsx'
import Text from './TypographyPage.jsx'
import Main from './MainPage.jsx'

import routes from './routes'

const Router = () => {
  let location = useLocation();
    return (
      <Switch location={location}>
          {/* {routes.map( (comp, idx) => (
            <Route  component={comp.component}  path={comp.path} key={idx} />
          ))} */}
          <Route  component={Buttons}  path="/botones"  />
          <Route  component={Dialogs}  path="/notifiaciones"  />
          <Route  component={Cards}  path="/tarjetas"  />
          <Route  component={Fields}  path="/formularios"  />
          <Route  component={Text}  path="/parrafos"  />
          <Route  component={Main}  path="/"  />
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
      </Switch>

    )
}

export default Router
