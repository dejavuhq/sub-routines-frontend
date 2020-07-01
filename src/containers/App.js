import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../components/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>  
  </BrowserRouter>
);

export default App;
