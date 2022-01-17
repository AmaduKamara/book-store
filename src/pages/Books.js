import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

function Books() {
  return (
    <div className="container mx-auto p-16 shadow-xl border rounded-md mt-24">
      <BookList />
      <BookForm />
    </div>
  );
}

export default Books;
