import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from '../context/UserContext'
import Home from '../components/Home';
import Login from '../components/Login';
import { Register } from '../Pages/Register';
import NotFound from '../components/NotFound';
import { RegisterValidation } from "../Pages/RegisterValidation";
import { Profile } from "./Profile";
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
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
