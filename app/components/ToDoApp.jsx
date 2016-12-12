import React from 'react';
import uuidV4 from 'uuid/v4';
import moment from 'moment';

/* eslint-disable */
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
/* eslint-enable */

export default class ToDoApp extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <TodoAddForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
