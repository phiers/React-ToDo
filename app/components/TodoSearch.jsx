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
      <div>
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search todos"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
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
