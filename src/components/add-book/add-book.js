import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import bookOperations from '../../redux/books/book-operations';
import './add-book.scss';

class BookItemCreate extends Component {
  state = {
    id: '',
    name: '',
    author: '',
    category: '',
    isbn: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddBook(this.state);

    this.setState({
      id: '',
      name: '',
      author: '',
      category: '',
      isbn: ''
    });

    console.log("Переброс на главную через 1 сек.");
    alert("Book added successfully");
    setTimeout(() => window.location.href = "/", 0);
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      category: value
    });
  };

  render() {

    let categories = ["Romance", "Fantasy", "Thriller"];

    const { name, author, isbn, category } = this.state;

    return (
      <div className="contact-form" >
        <button className='button-link'><Link to={{ pathname: `/` }}>Dashboard</Link></button>
        <form onSubmit={this.handleSubmit} >
          <label><p>Name</p>
            <input
              required
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label><p>Author</p>
            <input
              required
              type="text"
              value={author}
              onChange={this.handleChange}
              name="author"
            />
          </label>
          <label>
            Category:
            <select value={category} onChange={this.handleChange}>
              {categories.map(onecategory => <option name="category" key={uuidv4()} value={onecategory}>{onecategory}</option>)}
            </select>
          </label>
          <label><p>ISBN</p>
            <input
              required
              type="text"
              value={isbn}
              onChange={this.handleChange}
              name="isbn"
            />
          </label>
          <button type="submit">Add a Book</button>
        </form>
      </div>
    );
  }

}
const mapDispatchToProps = dispatch => ({
  onAddBook: (data) => dispatch(bookOperations.addBook(data))
});

export default connect(null, mapDispatchToProps)(BookItemCreate);