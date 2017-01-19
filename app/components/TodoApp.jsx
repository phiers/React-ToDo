import React from 'react';
import { connect } from 'react-redux';

/* eslint-disable */
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';
/* eslint-enable */

const TodoApp = (props) => {
  const onLogout = (evt) => {
    evt.preventDefault();
    props.dispatch(actions.startLogout());
    console.log('logged out');
  };
  return (
    <div>
      <div className="page-actions">
        <a onClick={onLogout}>Logout</a>
      </div>
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
};

export default connect(state => state)(TodoApp);
