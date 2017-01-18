import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import { todosReducer }  from 'reducers';
import { TodoList } from 'TodoList';
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
    const todoObject = { todos };
    const testStore = createStore(todosReducer, todoObject);
    const ToDoListContainer = connect(state => state)(TodoList);
    const provider = TestUtils.renderIntoDocument(
      <Provider store={testStore} >
        <ToDoListContainer />
      </Provider >,
    );
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ToDoListContainer)[0];
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
