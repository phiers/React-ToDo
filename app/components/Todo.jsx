import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import actions from 'actions'; //eslint-disable-line

export class Todo extends React.Component {

  render() {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let message = 'Created ';
      let timeStamp = createdAt;
      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }
      return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName}>
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => { dispatch(actions.toggleTodo(id)); }}
          />
        </div>
        <div onClick={() => { dispatch(actions.toggleTodo(id)); }} >
          <p>{text}</p>
          <p className="todo__subtext">{ renderDate() }</p>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);  // this makes dispatch avail on props

Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func,
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number,
};
