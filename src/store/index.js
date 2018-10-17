import { createStore, combineReducers } from 'redux';

import tree from './reducers/tree';

const store = createStore(
  combineReducers({
    tree,
  })
);

export default store;
