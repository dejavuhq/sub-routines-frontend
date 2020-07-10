import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import { Register } from '../Pages/Register';
import NotFound from '../components/NotFound';
import { RegisterValidation } from "../Pages/RegisterValidation";
import { Profile } from "../Pages/Profile";
import { Configuration } from "../Pages/Configuration";
import { ProfileConfiguration } from "../Pages/ProfileConfiguration";
import { HabitsConfiguration } from "../Pages/HabitsConfiguration";

import "../assets/styles/main.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register/validation' component={RegisterValidation} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/configuration' component={Configuration} />
      <Route exact path='/configuration/profile' component={ProfileConfiguration} />
      <Route exact path='/configuration/habits' component={HabitsConfiguration} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;