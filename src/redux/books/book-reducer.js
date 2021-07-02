import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
  addBookSuccess,
  removeBookSuccess,
  fetchBookSuccess,
  changeBookSuccess,
}
  from './book-actions';

const book = createReducer([], {
  [fetchBookSuccess]: (_, { payload }) => payload,
  [addBookSuccess]: (state, { payload }) => [...state, payload],
  [removeBookSuccess]: (state, { payload }) => state.filter(book => book.id !== payload),
  [changeBookSuccess]: (state, { payload }) => [state.filter(book => book.id !== payload.id), payload],
});

export default combineReducers({
  book
});