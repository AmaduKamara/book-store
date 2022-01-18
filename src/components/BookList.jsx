/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
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
