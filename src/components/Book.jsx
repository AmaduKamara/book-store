/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

function Book({ title }) {
  return (
    <div className="my-5 p-6 border flex justify-between items-center">
      <div>
        <p className="text-gray-400 text-xl mb-1">Action</p>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <h3 className="text-xl ">Author</h3>
        <div>
          <button type="button" className="mr-2 mt-2 text-sky-300 text-xl">
            Comment
          </button>
          <button type="button" className="mx-2 mt-2 text-sky-300 text-xl">
            Remove
          </button>
          <button type="button" className="mx-2 mt-2 text-sky-300 text-xl">
            Edit
          </button>
        </div>
      </div>
      <button
        type="button"
        className="py-3 px-16 rounded border border-red-400 hover:border-red-300 hover:bg-red-400 hover:text-white"
      >
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Book;
