import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // returned books show up as props in BookList
  return {
    books: state.books
  };
}

// function return will be props on BookList container
function mapDispatchToProps(dispatch) {
  // when selectBook called, result passed to reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from component to container
// Make dispatch method selectBook available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
