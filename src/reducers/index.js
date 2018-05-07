import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer.js';

export default combineReducers({
  categories: categoryReducer
})
