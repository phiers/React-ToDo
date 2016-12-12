import uuidV4 from 'uuid/v4';
import moment from 'moment';

const reducers = {
  searchTextReducer(state = '', action) {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;
      default:
        return state;
    }
  },

  showCompletedReducer(state = false, action) {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;
      default:
        return state;
    }
  },

  todosReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: uuidV4(),
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined,
          },
        ];
      case 'TOGGLE_TODO':
        return state.map((todo) => { // eslint-disable-line
          if (todo.id === action.id) {
            const completed = !todo.completed;

            return {
              ...todo,
              completed,
              completedAt: completed ? moment().unix() : undefined,
            };
          }
        });
      default:
        return state;
    }
  },
};

export default reducers;
