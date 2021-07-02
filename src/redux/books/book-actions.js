import { createAction } from '@reduxjs/toolkit';

export const fetchBookSuccess = createAction('book/fetchBookSuccess');
export const fetchBookRequest = createAction('book/fetchBookRequest');
export const fetchBookError = createAction('book/fetchBookError');

export const addBookSuccess = createAction('book/addBookSuccess');
export const addBookRequest = createAction('book/addBookRequest');
export const addBookError = createAction('book/addBookError');

export const removeBookSuccess = createAction('book/deleteSuccess');
export const removeBookRequest = createAction('book/deleteRequest');
export const removeBookError = createAction('book/deleteError');

export const changeBookSuccess = createAction('book/changeBookSuccess');
export const changeBookRequest = createAction('book/changeBookRequest');
export const changeBookError = createAction('book/changeBookError');