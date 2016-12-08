import React from 'react';

export default class TodoAddForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const todo = this.refs.todo.value;
    if (todo.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todo.focus();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todo" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}
