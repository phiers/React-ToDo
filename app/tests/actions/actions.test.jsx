/* eslint-disable */

import expect from 'expect';

import * as actions from 'actions';
/* eslint-enable */
/* eslint-disable no-undef */

describe('Actions', () => {
  it('should generate searchText action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some text',
    };
    const res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'Test todo',
        completed: false,
        createdAt: 949392339,
      },
    };
    const res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should generate addTodos action', () => {
    const todos = [
      {
        id: 1,
        text: 'test',
        completed: false,
        createdAt: 123,
        completedAt: 125,
      },
    ];
    const action = {
      type: 'ADD_TODOS',
      todos,
    };
    const res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    const res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 2,
    };
    const res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
