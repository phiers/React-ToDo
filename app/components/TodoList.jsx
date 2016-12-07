import React from 'react';
/* eslint-disable */
import Todo from 'Todo';
/* eslint-enable */

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const renderTodos = () => {
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
