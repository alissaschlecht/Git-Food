import React from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

const DefaultInput = ({
  id,
  isDisabled,
  type,
  value,
  minLength,
  maxLength,
  placeholder,
  showError,
  onChange,
  onBlur
}) => {
  return (
    <input
      autoComplete="off"
      disabled={isDisabled}
      id={id}
      name={id}
      type={type}
      value={value}
      placeholder={placeholder}
      minLength={minLength || null}
      maxLength={maxLength || null}
      onChange={({ target: { value } }) => onChange(value)}
      onBlur={onBlur}
      className={`${showError ? styles.error : ''}`}
      step="any"
    />
  );
};

DefaultInput.displayName = 'DefaultInput';
DefaultInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'email', 'search']),
  value: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  showError: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default DefaultInput;
