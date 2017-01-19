import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

/* eslint-disable */
import firebase from 'firebaseConfig';
import * as actions from 'actions';
import store from 'configureStore';
import routes from 'routes';
/* eslint-enable */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    browserHistory.push('/todos');
  } else {
    browserHistory.push('/');
  }
});
// fetch data from firebase
store.dispatch(actions.startFetchTodos());

// Load foundation
/* eslint-disable */
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Provider store={store} >
    {routes}
  </Provider >,
    document.getElementById('app')); //eslint-disable-line
