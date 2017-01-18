import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import * as actions from 'actions';
import { TodoAddForm } from 'TodoAddForm';
/* eslint-enable */
/* eslint-disable no-undef */
describe('TodoAddForm', () => {
  it('should exist', () => {
    expect(TodoAddForm).toExist();
  });

  it('should dispatch ADD_TODO when valid text entered', () => {
    const spy = expect.createSpy();
    const todoText = 'testing todo';
    const action = actions.startAddTodo(todoText);
    const todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoAddForm));
    todoAddForm.refs.todo.value = 'testing add';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should NOT dispatch ADD_TODO no text entered', () => {
    const spy = expect.createSpy();
    const todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoAddForm));
    todoAddForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
