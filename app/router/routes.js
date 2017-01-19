import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

/* eslint-disable */
import firebase from 'firebaseConfig';
import TodoApp from 'TodoApp';
import Login from 'Login';
import Main from 'Main';

// redirect user if not logged in
const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

// redirect user if logged in
const redirectIfLogggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="todos" component={TodoApp} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLogggedIn} />
    </Route>
  </Router>
);

export default routes;
