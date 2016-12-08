import React from 'react';
/* eslint-disable */
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
/* eslint-enable */

export default class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Todo app',
        },
        {
          id: 2,
          text: 'Start MD Viewer',
        },
        {
          id: 3,
          text: 'Workout',
        },
        {
          id: 4,
          text: 'Take a shower',
        },
      ],
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(text) {
    const id = this.state.todos[this.state.todos.length - 1].id + 1;
    const newTodo = [{ id, text }];
    this.setState({ todos: this.state.todos.concat(newTodo) });
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <TodoAddForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
