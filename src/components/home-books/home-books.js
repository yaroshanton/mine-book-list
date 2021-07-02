import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home-books.scss';
import { getVisibleBook } from '../../redux/books/book-selectors';
import bookOperations from '../../redux/books/book-operations';


function BookItem({ book, onRemoveBook }) {
  return (
    <div className="wrapper">
      <ul className="book-list">
        {
          book.map(({ id, name, author, category, isbn }) =>
            <li key={id} className="book-list-item">
              <p>{name}</p>
              <p>{author}</p>
              <p>{category}</p>
              <p>{isbn}</p>
              <div className="buttons">
                <button>
                  <Link to={{ pathname: `/product/${id}` }}>Edit</Link></button>
                <button type="button" className="button-delete" onClick={() => onRemoveBook(id)}>Delete</button>
              </div>
            </li>
          )}
      </ul>
    </div>

  );
}

const mapStateToProps = state => {
  const visibleBook = getVisibleBook(state);

  return {
    book: visibleBook
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveBook: id => dispatch(bookOperations.removeBook(id)),
  fetchBook: () => dispatch(bookOperations.fetchBook())
});


export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
