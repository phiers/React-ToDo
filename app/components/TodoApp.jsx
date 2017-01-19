import React from 'react';

/* eslint-disable */
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
/* eslint-enable */

const TodoApp = () =>
  (<div>
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

export default TodoApp;
