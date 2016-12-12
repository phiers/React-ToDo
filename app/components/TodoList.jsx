import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import Todo from 'Todo';
/* eslint-enable */
/* eslint-disable arrow-body-style */

export class TodoList extends React.Component {

  render() {
    const { todos } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do...</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };
    return (
      <div>
        { renderTodos() }
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      todos: state.todos,
    };
  },
)(TodoList);

TodoList.propTypes = {
  todos: React.PropTypes.array, //eslint-disable-line
};
