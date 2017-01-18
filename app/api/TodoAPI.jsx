/* eslint-disable no-undef */
module.exports = {
  filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;
    // Filter out completed items unless showCompleted is true
    filteredTodos = filteredTodos.filter(todo =>
      !todo.completed || showCompleted,
    );
    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      if (searchText) {
        if (todo.text.toLowerCase().indexOf(searchText) !== -1) {
          return true;
        }
        return false;
      }
      return true;
    });
    // sort todos with incomplete first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      }
      return 0;
    });
    return filteredTodos;
  },
};
