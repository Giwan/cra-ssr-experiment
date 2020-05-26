const initialState = {
  book: {},
  books: [],
  isLoading: false,
};

export const SET_BOOK = "SET_BOOK";
export const BOOK_LIST = "BOOK_LIST";
export const BOOK_LIST_LOADING = "BOOK_LIST_LOADING";

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOK:
      return {
        ...state,
        book: payload,
      };
    case BOOK_LIST_LOADING: {
      return { ...state, isLoading: true, books: [] };
    }
    case BOOK_LIST: {
      return {
        ...state,
        isLoading: false,
        books: [...payload.books],
      };
    }
    default:
      return state;
  }
};

export const setBook = (book) => ({ type: SET_BOOK, payload: book });
export const setListOfBooks = (books) => ({ type: BOOK_LIST, payload: books });
export const loadingListOfBooks = () => ({ type: BOOK_LIST_LOADING });
