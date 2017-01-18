/* eslint-disable */
import expect from 'expect';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';
import df from 'deep-freeze-strict';
/* eslint-enable */

/* eslint-disable no-undef */
describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'todo',
      };
      const res = searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      const res = showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });
  describe('todosReducer', () => {
    it('should add a new todo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Test todo',
          completed: false,
          createdAt: 949392339,
        },
      };
      const res = todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('should toggle todo completed', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 1,
      };
      const todos = [
        {
          id: 1,
          text: 'to do 1',
          completed: false,
          createdAt: 123,
          completedAt: undefined,
        },
      ];
      const res = todosReducer(df(todos), df(action));
      const todo = res[0];
      expect(todo.completed).toEqual(true);
      expect(todo.completedAt).toBeA('number');
    });
    it('should add existing todos', () => {
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
      const res = todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
