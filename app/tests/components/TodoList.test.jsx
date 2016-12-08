import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import Todo from 'Todo';
/* eslint-enable */
/* eslint-disable no-undef */
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it('should render one todo component for each todo item', () => {
    const todos = [
      {
        id: '1',
        text: 'item 1',
        completed: true,
      },
      {
        id: '2',
        text: 'item 2',
        completed: false,
      },
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
