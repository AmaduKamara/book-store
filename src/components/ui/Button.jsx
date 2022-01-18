/* eslint-disable linebreak-style */
import React from 'react';
import { PropTypes } from 'prop-types';

function Button({ className, text, handleClick }) {
  return (
    <button className={className} type="button" onClick={handleClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  handleClick() {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
