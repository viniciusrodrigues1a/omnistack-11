import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Logon from '../pages/Logon';
import Register from '../pages/Register';

import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Logon} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} isPrivate />
      <Route exact path="/incidents/new" component={NewIncident} isPrivate />
    </Switch>
  );
}
