import React from 'react';

export default class TodoSearch extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }
  render() {
    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search todos"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <label htmlFor="show-completed">
            <input
              id="show-completed"
              type="checkbox"
              ref="showCompleted"
              onChange={this.handleSearch}
            />
             Show Completed
          </label>
        </div>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
};
