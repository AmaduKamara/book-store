/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook } from '../redux/books/books';

import Button from './ui/Button';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitBookHandler = () => {
    const newBook = {
      id: uuid(),
      title,
      author,
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <form className="my-5 w-full">
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Author"
            className="p-3 border rounded focus:outline-none border-sky-500"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
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
        </select>
        <Button
          handleClick={submitBookHandler}
          className="py-3 px-16 rounded border bg-sky-500 text-white hover:text-white uppercase"
          text="Add Book"
        />
      </div>
    </form>
  );
}

export default BookForm;
