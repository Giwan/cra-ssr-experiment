import React from "react";
import { connect } from "react-redux";

const Book = ({ book = {} }) => (
  <div>
    <h1>Book</h1>
    <h1>{book.title1}</h1>
    <h1>{book.title2}</h1>
  </div>
);

const mapStateToProps = (state) => ({
  book: state.bookReducer.book,
});

export default connect(mapStateToProps, null)(Book);
