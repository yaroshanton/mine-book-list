import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import bookOperations from '../redux/books/book-operations';
import HomeBooks from '../components/home-books/home-books';



class HomePage extends Component {

  componentDidMount() {
    this.props.fetchBook();
  }

  render() {
    return (
      <>
        <HomeBooks />
        <button className='button-link'><Link to={{ pathname: `/product` }}>Add a Book</Link></button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBook: () => dispatch(bookOperations.fetchBook())
});


export default connect(null, mapDispatchToProps)(HomePage);;