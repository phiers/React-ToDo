import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {

  render() {
    const { id, text, completed, createdAt, completedAt } = this.props;
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
      <div>
        <input type="checkbox" checked={completed} onChange={() => { this.props.onToggle(id); }} />
        <p>{text}</p>
        <p>{ renderDate() }</p>
      </div>
    );
  }
}

Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number,
};
