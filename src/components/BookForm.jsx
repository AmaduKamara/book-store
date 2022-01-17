/* eslint-disable linebreak-style */
import React from 'react';

function BookForm() {
  return (
    <form>
      <h3>Add New Book</h3>
      <div>
        <input
          type="text"
          placeholder="Book title"
          className="p-5 border rounded"
        />
      </div>
    </form>
  );
}

export default BookForm;
