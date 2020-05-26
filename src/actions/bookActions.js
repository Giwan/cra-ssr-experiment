import {
  loadingListOfBooks,
  setListOfBooks,
  setBook,
} from "../store/reducers/bookReducer";
import fetch from "node-fetch";

export const fetchListOfBooks = () => async (dispatch) => {
  dispatch(loadingListOfBooks());

  try {
    const response = await fetch(
      "https://mytoori-service-acc.herokuapp.com/api/v2/collection/featured/9"
    );

    const books = await response.json();
    books && dispatch(setListOfBooks(books));
  } catch (e) {
    console.error("failed to load list of books: ", e.message);
  }
};

export const fetchBook = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://mytoori-service-acc.herokuapp.com/api/v2/item/id/${id}`
    );

    const book = await response.json();
    book && dispatch(setBook(book));
  } catch (e) {
    console.error("handle this: ", e.message);
  }
};
