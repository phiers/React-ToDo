import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions'; // eslint-disable-line

export class TodoAddForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { dispatch } = this.props;
    const todoText = this.refs.todo.value;
    if (todoText.length > 0) {
      this.refs.todo.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todo.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input type="text" ref="todo" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(TodoAddForm);

TodoAddForm.propTypes = {
  dispatch: React.PropTypes.func,
};
