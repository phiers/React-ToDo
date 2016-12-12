import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { configure } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';
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
        completed: false,
        completedAt: undefined,
        createdAt: 125,
      },
      {
        id: '2',
        text: 'item 2',
        completed: false,
        completedAt: undefined,
        createdAt: 125,
      },
    ];
    const store = configure({
      todos,
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store} >
        <ConnectedTodoList />
      </Provider >,
    );
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no to do items', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList)); //eslint-disable-line

    expect($el.find('.container__message').length).toBe(1);
  });
});
