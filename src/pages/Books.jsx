/* eslint-disable linebreak-style */
import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Books() {
  return (
    <div className="mx-6 md:container md:mx-auto px-6 md:px-20 py-6 mb-12 shadow-xl bg-white rounded border mt-12">
      <BookList />
      <hr />
      <BookForm />
    </div>
  );
}

export default Books;
