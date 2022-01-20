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
            className="p-2 md:p-4 border rounded focus:outline-none border-sky-500 w-full"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <select
          name="category"
          className="p-2 text-sm md:text-lg md:p-4 px-3 border mx-2 md:mx-8 w-1/5 border-sky-500 rounded focus:outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
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
          <option value="Action" className="my-2">
            Action
          </option>
          <option value="Fiction" className="my-2">
            Fiction
          </option>
          <option value="Other" className="my-2">
            Other
          </option>
        </select>
        <Button
          handleClick={submitBookHandler}
          className="p-1 text-xs md:text-lg  md:py-4 px-2 md:px-8 rounded border bg-sky-500 text-white hover:text-white uppercase focus:outline-sky-700"
          text="Add Book"
        />
      </div>
    </form>
  );
}

export default BookForm;
