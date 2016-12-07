import React from 'react';
/* eslint-disable */
import TodoList from 'TodoList';
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
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}
