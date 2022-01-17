/* eslint-disable linebreak-style */
import React from 'react';

function BookForm() {
  return (
    <form className="my-10 w-full">
      <h3 className="text-2xl uppercase font-semibold text-gray-400 my-3">
        Add New Book
      </h3>
      <div>
        <input
          type="text"
          placeholder="Book title"
          className="p-3 border rounded w-3/5 focus:outline-none"
        />
        <select name="category" className="p-3 border mx-4  w-1/5">
          <option value="" className="my-2">
            Category
          </option>
          <option value="cat1" className="my-2">
            Category 1
          </option>
          <option value="cat2" className="my-2">
            Category 2
          </option>
          <option value="cat3" className="my-2">
            Category 3
          </option>
          <option value="cat4" className="my-2">
            Category 4
          </option>
        </select>
        <button
          type="button"
          className="py-3 px-16 rounded border bg-sky-500 text-white hover:text-white uppercase"
        >
          Add Book
        </button>
      </div>
    </form>
  );
}

export default BookForm;
