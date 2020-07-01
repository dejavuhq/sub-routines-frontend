import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import { Register } from '../Pages/Register/index';
import NotFound from '../components/NotFound';
//import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.scss";

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default App;