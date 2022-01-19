import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookStore/books/DISPLAY_BOOKS';

const initialState = {
  books: [],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const dispayBooks = (payload) => ({
  type: DISPLAY_BOOKS,
  payload,
});

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const sendBook = (payload) => async (dispatch) => {
  const { id, category, title } = payload;

  const newBook = {
    item_id: id,
    category,
    title,
  };

  await axios.post(`${baseURL}/apps/LttD9eZf73PXhoftVKbz/books`, newBook);

  dispatch(addBook(payload));
};

export const fetchBook = () => async (dispatch) => {
  const books = await axios.get(`${baseURL}/apps/LttD9eZf73PXhoftVKbz/books`);
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(dispayBooks(mapBooks));
};

export const deleteBook = (id) => async (dispatch) => {
  await axios.delete(`${baseURL}/apps/LttD9eZf73PXhoftVKbz/books/${id}`);

  dispatch(removeBook({ id }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    case DISPLAY_BOOKS:
      return { books: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
