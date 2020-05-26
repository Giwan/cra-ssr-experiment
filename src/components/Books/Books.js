import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchListOfBooks } from "../../actions/bookActions";

const Books = ({ books, fetchListOfBooks, isLoading }) => {
  useEffect(() => {
    if (!isLoading && !(books && Object.keys(books).length > 0)) {
      fetchListOfBooks();
    }
  }, [isLoading, books, fetchListOfBooks]);
  return (
    <>
      <h1>List of books</h1>
      <nav>
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <Link to={`/book/${book._id}`}>{book.title1}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    isLoading: state.bookReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchListOfBooks,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Books);
