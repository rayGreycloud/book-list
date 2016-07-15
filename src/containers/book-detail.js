import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book for more details.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Author: {this.props.book.author}</div>
        <div>Year: {this.props.book.year}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // returned book shows up as props in BookDetail
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
