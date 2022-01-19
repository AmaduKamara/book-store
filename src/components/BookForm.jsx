/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { sendBook } from '../redux/books/books';

import Button from './ui/Button';

function BookForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookHandler = () => {
    const newBook = {
      id: uuid(),
      title,
    };

    dispatch(sendBook(newBook));

    setTitle('');
    setCategory('');
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
            className="p-3 border rounded focus:outline-none border-sky-500 w-full"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <select
          name="category"
          className="p-3 border mx-8  w-1/5 border-sky-500 rounded focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" className="my-2">
            Select a category
          </option>
          <option value="Technology" className="my-2">
            Technology
          </option>
          <option value="Science" className="my-2">
            Science
          </option>
          <option value="Education" className="my-2">
            Education
          </option>
          <option value="Business" className="my-2">
            Business
          </option>
          <option value="Entertainment" className="my-2">
            Entertainment
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
