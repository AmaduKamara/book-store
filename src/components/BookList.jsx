/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook } from '../redux/books/books';

import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.bookReducer.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            category={book.category}
          />
        ))
      ) : (
        <h3 className="text-2xl text-center py-4 text-gray-400">
          No books in store
        </h3>
      )}
    </div>
  );
}

export default BookList;
