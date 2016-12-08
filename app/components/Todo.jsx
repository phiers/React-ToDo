import React from 'react';

export default class Todo extends React.Component {

  render() {
    const { id, text, completed } = this.props;
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={() => { this.props.onToggle(id); }} />
        {text}
      </div>
    );
  }
}

Todo.propTypes = {
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
};
