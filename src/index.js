import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RouteWithAuth from './Auth/PrivateRoute';
import Callback from './Auth/Callback';

import App from './App';
import Home from './Home/Home';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const routes =
<BrowserRouter>
    <Switch>
      <RouteWithAuth path="/callback" component={Callback} /> 
      <RouteWithAuth path="/home" component={Home} />
      <RouteWithAuth path="/" component={App} />;
    </Switch>
</BrowserRouter>

ReactDOM.render(
  routes,
  document.getElementById('root')
);
