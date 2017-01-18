import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; // eslint-disable-line
import thunk from 'redux-thunk'; // eslint-disable-line
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers'; // eslint-disable-line

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer,
});

const logger = createLogger();

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store;
