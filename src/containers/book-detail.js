import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Detail</div>
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
