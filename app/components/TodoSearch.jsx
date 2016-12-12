import React from 'react';
import { connect } from 'react-redux';
import actions from 'actions'; // eslint-disable-line

export class TodoSearch extends React.Component {

  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            placeholder="Search todos"
            value={searchText}
            onChange={(evt) => {
              const searchItem = evt.target.value;
              dispatch(actions.setSearchText(searchItem));
            }}
          />
        </div>
        <div>
          <label htmlFor="show-completed">
            <input
              id="show-completed"
              type="checkbox"
              checked={showCompleted}
              onChange={() => dispatch(actions.toggleShowCompleted())}
            />
             Show Completed
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => { //eslint-disable-line
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText,
    };
  },
)(TodoSearch);

TodoSearch.propTypes = {
  dispatch: React.PropTypes.func,
  showCompleted: React.PropTypes.bool,
  searchText: React.PropTypes.string,
};
