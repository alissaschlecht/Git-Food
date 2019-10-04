import React from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

const Label = ({ id, label, color = 'black', size, className }) => {
  return (
    <label
      htmlFor={id}
      className={`${styles.label} ${styles[color]} ${
        className ? className : ''
      }`}
    >
      {label}
    </label>
  );
};

Label.displayName = 'Label';
Label.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  color: PropTypes.oneOf(['black', 'white'])
};

export default Label;
