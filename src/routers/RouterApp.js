import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/Home';
import Recognixe from '../pages/Recognixe';

function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recognixe" component={Recognixe} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterApp;
