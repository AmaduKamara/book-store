/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteBook } from '../redux/books/books';

import Button from './ui/Button';

function Book({ title, category, id }) {
  const dispatch = useDispatch();

  const handleBookRemoval = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="my-5 mr-3 py-4 px-6 border flex justify-between items-center shadow">
      <div className="w-4/6">
        <p className="text-gray-400 text-sm md:text-lg mb-1">{category}</p>
        <h2 className="text-lg md:text-3xl font-semibold">{title}</h2>
        <div>
          <Button
            className="mr-2 md:mr-6 mt-2 text-sky-500 text-sm md:text-lg font-thin hover:text-sky-600 "
            text="Comment"
          />
          <Button
            className="mr-2 md:mr-6 mt-2  text-sm md:text-lg font-thin text-sky-500 hover:text-red-400"
            text="Remove"
            handleClick={handleBookRemoval}
          />
          <Button
            className="md:ml-2 mt-2 text-sky-500 text-sm md:text-lg font-thin hover:text-sky-600"
            text="Edit"
          />
        </div>
      </div>
      <div className="w-2/6 flex justify-end">
        <Button
          className="text-xs py-2 px-1 md:text-sm md:px-5 font-thin rounded border bg-sky-500 text-white hover:text-white uppercase"
          text="Update Progress"
        />
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
