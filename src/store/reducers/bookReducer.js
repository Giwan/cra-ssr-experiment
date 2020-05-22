const initialState = {
  book: {},
};

const SET_BOOK = "SET_BOOK";

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOK:
      return {
        ...state,
        book: payload,
      };
    default:
      return state;
  }
};

export const setBook = (book) => ({ type: SET_BOOK, payload: book });
