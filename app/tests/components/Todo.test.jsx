import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Todo from 'Todo';
/* eslint-enable */
/* eslint-disable no-undef */
describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
  it('should call onToggle with correct id when check is toggled', () => {
    const todoData = { id: '1', text: 'test', completed: true };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
    const $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.change($el.find('input')[0]);
    expect(spy).toHaveBeenCalledWith('1');
  });
});
