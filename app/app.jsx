import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import ToDoApp from 'TodoApp';

// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <ToDoApp />,
    document.getElementById('app')); //eslint-disable-line
