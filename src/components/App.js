import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from '../components/Home';
// import Login from '../components/Login';
import { Register } from '../Pages/Register/index';
// import NotFound from '../components/NotFound';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/register' component={Register} />
      </Switch>
  </BrowserRouter>
);

export default App;