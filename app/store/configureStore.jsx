import { createStore, combineReducers, compose } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers'; // eslint-disable-line

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });
  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));
  return store;
};
