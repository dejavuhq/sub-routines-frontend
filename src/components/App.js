import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext'
import Home from '../components/Home';
import Login from '../components/Login';
import { Register } from '../pages/Register';
import NotFound from '../pages/NotFound';
import { RegisterValidation } from "../pages/RegisterValidation";
import { Profile } from "../pages/Profile";
import { Configuration } from "../pages/Configuration";
import { ProfileConfiguration } from "../pages/ProfileConfiguration";
import { HabitsConfiguration } from "../pages/HabitsConfiguration";
import { EditHabit } from "../pages/EditHabit";

import "../assets/styles/main.scss";

const App = () => {
  /* const user = {
    user: null,
    token: null
  } */
  const [user, setUser] = useState(
    {
      "user": null,
      "token": null,
    }
  );
  const value = { user, setUser };
  return (
    <UserProvider value={value}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' render={(props) => (<Login />)} />
          <Route exact path='/register/validation' component={RegisterValidation} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/configuration' component={Configuration} />
          <Route exact path='/configuration/profile' component={ProfileConfiguration} />
          <Route exact path='/configuration/habits' component={HabitsConfiguration} />
          <Route exact path='/configuration/habits/:id' component={EditHabit} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;