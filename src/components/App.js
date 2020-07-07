import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/Home';
import Login from '../components/Login';
import { Register } from '../Pages/Register';
import NotFound from '../components/NotFound';
import { RegisterValidation } from "../Pages/RegisterValidation";
import { AuthContext } from '../context/auth';
import "../assets/styles/main.scss";

const App = (props) => (
  <AuthContext.Provider value={false}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/home' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register/validation' component={RegisterValidation} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </AuthContext.Provider>
);

export default App;