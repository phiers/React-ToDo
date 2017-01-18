import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* eslint-disable */
import TodoApp from 'TodoApp';
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
    <TodoApp />
  </Provider >,
    document.getElementById('app')); //eslint-disable-line
