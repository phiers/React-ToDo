import React from 'react';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { TodoSearch } from 'TodoSearch';
/* eslint-enable */
/* eslint-disable no-undef */
describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });
  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const searchText = 'tutorial';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText,
    };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    todoSearch.evt.target.value = searchText;
    TestUtils.Simulate.change(todoSearch.evt.target);
    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should dispatch TOGGLE_SHOW_COMPLETED when checked', () => {
    const action = { type: 'TOGGLE_SHOW_COMPLETED' };
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
