import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

const initialState = {
  currentProduct: {},
  currentProductStyles: {},
  currentProductReviews: {},
  error: '',
  currentStyle: {}
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);


export default store;