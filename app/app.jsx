import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* eslint-disable */
import ToDoApp from 'TodoApp';
import actions from 'actions';

const store = require('configureStore').configure();

store.subscribe(() => {
  
});
// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Provider store={store} >
    <ToDoApp />
  </Provider >,
    document.getElementById('app')); //eslint-disable-line
