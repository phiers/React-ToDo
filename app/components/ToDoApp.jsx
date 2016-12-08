import React from 'react';
import uuidV4 from 'uuid/v4';

/* eslint-disable */
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
/* eslint-enable */

export default class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuidV4(),
          text: 'Todo app tutorial',
        },
        {
          id: uuidV4(),
          text: 'Start MD Viewer',
        },
        {
          id: uuidV4(),
          text: 'Workout',
        },
        {
          id: uuidV4(),
          text: 'Take a shower',
        },
      ],
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidV4(),
          text,
        },
      ],
    });
    // this.setState({ todos: this.state.todos.concat(newTodo) });
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase(),
    });
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <TodoAddForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
