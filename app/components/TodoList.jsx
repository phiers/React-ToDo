import React from 'react';
/* eslint-disable */
import Todo from 'Todo';
/* eslint-enable */

export default class TodoList extends React.Component {

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
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
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
