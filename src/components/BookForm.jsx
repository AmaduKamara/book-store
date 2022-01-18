/* eslint-disable linebreak-style */
import React from 'react';

function BookForm() {
  return (
    <form className="my-10 w-full">
      <h3 className="text-2xl uppercase font-semibold text-gray-400 my-3">
        Add New Book
      </h3>
      <div className="flex">
        <div className="w-3/5">
          <input
            type="text"
            placeholder="Book title"
            className="p-3 border rounded focus:outline-none border-sky-500 w-2/3 mr-4"
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="p-3 border rounded focus:outline-none border-sky-500"
            required
          />
        </div>
        <select
          name="category"
          className="p-3 border mr-4  w-1/5 border-sky-500 rounded"
        >
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
