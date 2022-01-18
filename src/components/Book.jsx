/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';

import Button from './ui/Button';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleBookRemoval = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="my-5 p-4 border flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-xl mb-1">Action</p>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <h3 className="text-lg text-gray-500 mt-3">{author}</h3>
        <div>
          <Button
            className="mr-2 mt-2 text-sky-300 text-xl hover:text-sky-600"
            text="Comment"
          />
          <Button
            className="mr-2 mt-2  text-xl text-sky-300 hover:text-red-400"
            text="Remove"
            handleClick={handleBookRemoval}
          />
          <Button
            className="mr-2 mt-2 text-sky-300 text-xl hover:text-sky-600"
            text="Edit"
          />
        </div>
      </div>
      <Button
        className="py-2 px-5 rounded border bg-sky-500 text-white hover:text-white uppercase"
        text="Update Progress"
      />
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
