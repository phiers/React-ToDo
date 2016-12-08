import React from 'react';
import uuidV4 from 'uuid/v4';

/* eslint-disable */
import TodoList from 'TodoList';
import TodoAddForm from 'TodoAddForm';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';
/* eslint-enable */

export default class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos(),
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed; // eslint-disable-line
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuidV4(),
          text,
          completed: false,
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
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <TodoAddForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
