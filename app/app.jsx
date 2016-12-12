import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import ToDoApp from 'TodoApp';
import actions from 'actions';

const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('test dispatch'));
store.dispatch(actions.setSearchText('test'));
store.dispatch(actions.toggleShowCompleted());
// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <ToDoApp />,
    document.getElementById('app')); //eslint-disable-line
