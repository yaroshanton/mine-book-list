import axios from 'axios';
import {
  addBookRequest,
  addBookSuccess,
  addBookError,
  removeBookRequest,
  removeBookSuccess,
  removeBookError,
  fetchBookRequest,
  fetchBookSuccess,
  fetchBookError,
  changeBookRequest,
  changeBookSuccess,
  changeBookError,
} from './book-actions';

const fetchBook = () => dispatch => {
  dispatch(fetchBookRequest());

  axios
    .get('/product')
    .then(({ data }) => dispatch(fetchBookSuccess(data)))
    .catch(error => dispatch(fetchBookError(error)));
};

const removeBook = BookId => dispatch => {
  dispatch(removeBookRequest());

  axios
    .delete(`/product/${BookId}`)
    .then(() => dispatch(removeBookSuccess(BookId)))
    .catch(error => dispatch(removeBookError(error)));
};

const addBook = data => dispatch => {
  dispatch(addBookRequest());

  axios
    .post('/product', data)
    .then(({ data }) => dispatch(addBookSuccess(data)))
    .catch(error => dispatch(addBookError(error)));
};

const changeBook = (BookId) => dispatch => {
  dispatch(changeBookRequest());

  axios
    .patch(`/product/${BookId.id}`, BookId)
    .then(() => dispatch(changeBookSuccess(BookId)))
    .catch(error => dispatch(changeBookError(error)));
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchBook,
  removeBook,
  addBook,
  changeBook
};