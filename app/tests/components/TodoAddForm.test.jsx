import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoAddForm from 'TodoAddForm';
/* eslint-enable */
/* eslint-disable no-undef */
describe('TodoAddForm', () => {
  it('should exist', () => {
    expect(TodoAddForm).toExist();
  });
  it('should call onAddTodo prop if text entered', () => {
    const spy = expect.createSpy();
    const todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoAddForm));
    todoAddForm.refs.todo.value = 'test';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('test');
  });
  it('should NOT call onAddTodo prop if no text entered', () => {
    const spy = expect.createSpy();
    const todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy} />);
    const $el = $(ReactDOM.findDOMNode(todoAddForm));
    todoAddForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
