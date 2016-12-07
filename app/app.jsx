import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
/* eslint-disable */
import Main from 'Main';

// Load foundation

$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <p>Insert routes here</p>
    </Route>
  </Router>,
    document.getElementById('app')); //eslint-disable-line
