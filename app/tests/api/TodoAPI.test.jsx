/* eslint-disable */
import expect from 'expect';

import TodoAPI from 'TodoAPI';
/* eslint-enable */
/* eslint-disable no-undef */

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('set Todos', () => {
    it('should set valid todos array', () => {
      const todos = [
        { id: '1',
          text: 'test',
          completed: false,
        },
      ];
      TodoAPI.setTodos(todos);
      const actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array', () => {
      const badTodos = { a: 'b' };
      TodoAPI.setTodos(badTodos);
      // instead of clearing localStorage, I just expect it to be what I did above
      expect(localStorage.getItem('todos')).toBe('[{"id":"1","text":"test","completed":false}]');
    });
  });
  describe('get Todos', () => {
    it('should get valid todos array', () => {
      expect(localStorage.getItem('todos')).toBe('[{"id":"1","text":"test","completed":false}]');
    });
    it('should return empty array if no data in localStorage', () => {
      localStorage.removeItem('todos');
      const todos = TodoAPI.getTodos();
      expect(todos).toEqual([]);
    });
  });
});
