/* eslint-disable linebreak-style */
import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Books() {
  return (
    <div className="container mx-auto p-6 mb-10 shadow-xl border rounded-md mt-16">
      <BookList />
      <BookForm />
    </div>
  );
}

export default Books;
