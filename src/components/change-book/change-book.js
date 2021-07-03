import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import productOperations from '../../redux/books/book-operations';

class BookItemCreate extends Component {
  state = {
    id: '',
    name: '',
    author: '',
    category: '',
    isbn: ''
  };

  componentDidMount() {
    const { productId } = this.props.match.params;

    axios.get(`/product/${productId}`)
      .then(res => this.setState({ ...res.data }));
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.changeBook(this.state);

    this.setState({
      id: '',
      name: '',
      author: '',
      category: '',
      isbn: '',
    });

    console.log("Переброс на главную через 1 сек.");
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

    let categorys = ["Romance", "Fantasy", "Thriller"];

    const { name, author, isbn, category } = this.state;

    return (
      <div className="contact-form" >
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
              {categorys.map(onecategory => <option name="category" key={uuidv4()} value={onecategory}>{onecategory}</option>)}
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
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  changeBook: (data) => dispatch(productOperations.changeBook(data))
});

export default connect(null, mapDispatchToProps)(BookItemCreate);