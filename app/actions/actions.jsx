import firebase, { firebaseRef } from 'index'; // eslint-disable-line
import moment from 'moment';

export function setSearchText(searchText) {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText,
  };
}

export function toggleShowCompleted() {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
}

export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo,
  };
}

export function startAddTodo(text) {
  return (dispatch) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null,
    };
    const todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key,
      }));
    });
  };
}

export function fetchTodos(todos) {
  return {
    type: 'FETCH_TODOS',
    todos,
  };
}

export function startFetchTodos() {
  return (dispatch) => {
    const todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) => {
      const todos = snapshot.val() || {};
      const parsedTodos = [];
      Object.keys(todos).forEach((todoId) => {
        parsedTodos.push({
          id: todoId,
          ...todos[todoId], //grab the todo object with this id
        });
      });
      dispatch(fetchTodos(parsedTodos));
    });
  };
}

export function updateTodo(id, updates) {
  return {
    type: 'UPDATE_TODO',
    id,
    updates,
  };
}

export function startToggleTodo(id, completed) {
  return (dispatch) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null,
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
}
