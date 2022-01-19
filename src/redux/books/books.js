import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
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

  // fetch(`${baseURL}/apps/LttD9eZf73PXhoftVKbz/books`, {
  //   method: 'POST',
  //   headers: {
  //     contentType: 'application/json',
  //   },
  //   body: JSON.stringify(newBook),
  // });

  await axios.post(`${baseURL}/apps/LttD9eZf73PXhoftVKbz/books`, newBook);

  dispatch(addBook(payload));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
