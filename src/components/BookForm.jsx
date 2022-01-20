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
      category,
      title,
    };

    if (newBook.category || newBook.title) {
      dispatch(sendBook(newBook));
      setTitle('');
      setCategory('');
    }
  };

  return (
    <form className="my-8 w-full">
      <h3 className="md:text-2xl uppercase font-semibold text-gray-400 my-3">
        Add New Book
      </h3>
      <div className="flex">
        <div className="w-3/5">
          <input
            type="text"
            placeholder="Book title"
            className="p-2 md:p-3 border rounded focus:outline-none border-sky-500 w-full"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <select
          name="category"
          className="text-sm md:text-lg md:p-3 border mx-2 md:mx-6 w-1/5 border-sky-500 rounded focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">
            Select a category
          </option>
          <option value="Technology">
            Technology
          </option>
          <option value="Science">
            Science
          </option>
          <option value="Education">
            Education
          </option>
          <option value="Business">
            Business
          </option>
          <option value="Entertainment">
            Entertainment
          </option>
          <option value="Action">
            Action
          </option>
          <option value="Fiction">
            Fiction
          </option>
          <option value="Other">
            Other
          </option>
        </select>
        <Button
          handleClick={submitBookHandler}
          className="p-1 text-xs md:text-lg px-2 md:px-10 rounded border bg-sky-500 text-white hover:text-white uppercase focus:outline-sky-700"
          text="Add Book"
        />
      </div>
    </form>
  );
}

export default BookForm;
