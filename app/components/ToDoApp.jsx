import React from 'react';
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
          id: 1,
          text: 'Todo app tutorial',
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
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleAddTodo(text) {
    const id = this.state.todos[this.state.todos.length - 1].id + 1;
    const newTodo = [{ id, text }];
    this.setState({ todos: this.state.todos.concat(newTodo) });
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
