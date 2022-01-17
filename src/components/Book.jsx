/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Book({ title }) {
  return (
    <div className="my-5 p-6 border flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>
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
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.string,
};

export default Book;
