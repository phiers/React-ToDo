import React from 'react';
// import ReactDOM from 'react-dom';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';
/* eslint-enable */
/* eslint-disable no-undef */
describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  it('should add a new todo to state on handleAddTodo', () => {
    const todoText = 'testing';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it('should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: '11',
      text: 'test',
      completed: false,
      createdAt: 0,
      completedAt: undefined,
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] });
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle('11');
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it('should toggle remove completedAt value when toggled to true', () => {
    const todoData = {
      id: '11',
      text: 'test',
      completed: true,
      createdAt: 0,
      completedAt: 1,
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todoData] });
    todoApp.handleToggle('11');
    todoApp.state.completed = false;
    expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
  });
});
