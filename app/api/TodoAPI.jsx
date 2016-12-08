/* eslint-disable no-undef */

module.exports = {
  setTodos(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    return todos;
  },
  getTodos() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (err) {
      console.log(err);
    }
    todos = Array.isArray(todos) ? todos : [];

    return todos;
  },
};
