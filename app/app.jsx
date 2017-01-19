import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
/* eslint-disable */
import TodoApp from 'TodoApp';
import Login from 'Login';
import Main from 'Main';
import * as actions from 'actions';
import store from 'configureStore';
import TodoAPI from 'TodoAPI';

// fetch data from firebase
store.dispatch(actions.startFetchTodos());

// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider >,
    document.getElementById('app')); //eslint-disable-line
