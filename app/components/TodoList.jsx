import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';
/* eslint-enable */
/* eslint-disable arrow-body-style */

export class TodoList extends React.Component {

  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do...</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
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
    return state;
  },
)(TodoList);

TodoList.propTypes = {
  todos: React.PropTypes.array, //eslint-disable-line
  searchText: React.PropTypes.string,
  showCompleted: React.PropTypes.bool,
};
