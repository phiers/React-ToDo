/* eslint-disable */

import expect from 'expect';

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from 'actions';
/* eslint-enable */
/* eslint-disable no-undef */

describe('Actions', () => {
  it('should generate searchText action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some text',
    };
    const res = setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'New todo',
    };
    const res = addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    const res = toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 2,
    };
    const res = toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
