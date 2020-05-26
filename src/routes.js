import App from "./App";
import Books from "./components/Books/Books";
import Book from "./components/Book/Book";
import { fetchListOfBooks, fetchBook } from "./actions/bookActions";

const loadBookData = async (store, path) => {
  try {
    const id = path.split("/").pop();

    await fetchBook(id)(store.dispatch);

    return store;
  } catch (e) {
    console.error("handle this: ", e.message);
  }
};

const loadBooksData = async (store) => {
  try {
    await fetchListOfBooks()(store.dispatch);

    return store;
  } catch (e) {
    console.error("handle this ", e.message);
  }
};

export default [
  {
    path: "/books",
    component: Books,
    loadData: loadBooksData,
  },
  {
    path: "/book/:id",
    component: Book,
    loadData: loadBookData,
  },
  {
    path: "/",
    component: App,
  },
];
