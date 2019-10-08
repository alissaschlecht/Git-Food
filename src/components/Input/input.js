import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './components/label.js';
import DefaultInput from './components/default-input.js';
import PasswordInput from './components/password-input.js';
import InputError from './components/input-error.js';
import inputErrors from '../../utils/input-errors.js';
import styles from './input.module.scss';
import { getCurrentError } from './helpers.js';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: props.isRequired
        ? [inputErrors.required].concat(props.extraErrors)
        : props.extraErrors,
      currentError: false,
      hasBlurred: false,
      isVirgin: true
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation, value } = props;
    const { errors } = state;

    if (reset) {
      return {
        ...state,
        hasBlurred: false,
        isVirgin: true,
        currentError: false
      };
    }

    if (forceValidation) {
      return {
        ...state,
        currentError: getCurrentError(value, errors),
        isVirgin: false,
        hasBlurred: true
      };
    }

    return state;
  }

  handleBlur() {
    const { value, onInputChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(value, errors);
    this.setState({
      hasBlurred: true,
      isVirgin: false,
      currentError: error
    });
    onInputChange(value, error);
  }

  handleChange(value) {
    const { onInputChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(value, errors);
    this.setState({ currentError: error });
    onInputChange(value, error);
  }

  render() {
    const {
      className,
      id,
      label,
      labelColor,
      isDisabled,
      type,
      value,
      minLength,
      maxLength,
      allowShow,
      placeholder,
      noLabel
    } = this.props;

    const { hasBlurred, isVirgin, currentError, errors } = this.state;
    const showError = hasBlurred && !isVirgin && currentError ? true : false;

    return (
      <div className={`${className ? className : ''} ${styles['input']}`}>
        {!noLabel && <Label id={id} label={label} color={labelColor} />}
        {['password'].includes(type) && (
          <PasswordInput
            id={id}
            isDisabled={isDisabled}
            value={value}
            showError={showError}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            allowShow={allowShow}
            placeholder={`${placeholder ? placeholder : ''}`}
          />
        )}
        {['text', 'number', 'email', 'search'].includes(type) && (
          <DefaultInput
            id={id}
            isDisabled={isDisabled}
            type={type}
            value={value}
            minLength={minLength || null}
            maxLength={maxLength || null}
            showError={showError}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            placeholder={`${placeholder ? placeholder : ''}`}
          />
        )}
        {showError && (
          <InputError errors={errors} currentError={currentError} />
        )}
      </div>
    );
  }
}

Input.displayName = 'Input';
Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any,
  labelColor: PropTypes.oneOf(['black', 'white']),
  value: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'text',
    'number',
    'password',
    'email'
  ]),
  allowShow: PropTypes.bool,
  className: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  forceValidation: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  reset: PropTypes.bool,
  noLabel: PropTypes.bool,
  extraErrors: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      message: PropTypes.string,
      isError: PropTypes.func
    })
  ),
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  forceValidation: false,
  isDisabled: false,
  isRequired: true,
  reset: false,
  extraErrors: [],
  allowShow: true,
  noLabel: false
};

export default Input;
