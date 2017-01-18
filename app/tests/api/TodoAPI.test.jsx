/* eslint-disable */
import expect from 'expect';

import TodoAPI from 'TodoAPI';
/* eslint-enable */
/* eslint-disable no-undef */

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('filteredTodos', () => {
    const todos = [
      {
        id: '1',
        text: 'some text',
        completed: true,
      },
      {
        id: '2',
        text: 'text',
        completed: false,
      },
      {
        id: '3',
        text: 'some more text',
        completed: true,
      },
    ];
    it('should return all item if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should only return uncompleted items when showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].id).toBe('2');
    });
    it('should filter items based on searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'so');
      expect(filteredTodos.length).toBe(2);
    });
    it('should return all items if no searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
