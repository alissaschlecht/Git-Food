import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../input.module.scss';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false
    };
  }

  render() {
    const {
      id,
      isDisabled,
      value,
      showError,
      onChange,
      onBlur,
      allowShow,
      placeholder
    } = this.props;
    const { showPassword } = this.state;

    return (
      <div className={allowShow ? styles.password : styles.input}>
        <input
          autoComplete="off"
          disabled={isDisabled}
          id={id}
          name={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
          onBlur={onBlur}
          className={`${showError ? styles.error : ''}`}
          placeholder={placeholder}
        />
        {allowShow && (
          <span onClick={() => this.setState({ showPassword: !showPassword })}>
            {showPassword ? 'hide' : 'show'}
          </span>
        )}
      </div>
    );
  }
}

PasswordInput.displayName = 'PasswordInput';
PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  allowShow: PropTypes.bool,
  placeholder: PropTypes.string
};

export default PasswordInput;
