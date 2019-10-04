import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inputErrors from '../../utils/input-errors.js';
import { getCurrentError } from './helpers.js';
import _ from 'underscore.string';
import { isEmpty } from '../../utils/is-empty.js';

import Label from './components/label.js';
import InputError from './components/input-error.js';
import Option from './components/option.js';

import styles from './input.module.scss';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: props.isRequired
        ? [inputErrors.required].concat(props.extraErrors)
        : props.extraErrors,
      currentError: false,
      hasBlurred: false,
      isVirgin: true,
      listOpen: false,
      selectedOption: {}
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation, option } = props;
    const { errors, selectedOption } = state;

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
        currentError: getCurrentError(_.slugify(selectedOption.title), errors),
        isVirgin: false,
        hasBlurred: true
      };
    }

    if (option) {
      return {
        ...state,
        selectedOption: {
          title: !isEmpty(selectedOption) ? selectedOption.title : option
        }
      };
    }

    return state;
  }

  toggleList() {
    this.setState({
      listOpen: !this.state.listOpen
    });
  }

  handleBlur() {
    // setTimeout needed for IE11 to behave nicely with blur
    setTimeout(() => {
      const { onSelectChange } = this.props;
      const { selectedOption, errors } = this.state;
      const error = getCurrentError(_.slugify(selectedOption.title), errors);
      this.setState({
        hasBlurred: true,
        isVirgin: false,
        currentError: error,
        listOpen: false
      });
      onSelectChange(_.slugify(selectedOption.title), error);
    }, 100);
  }

  handleChange(title, id) {
    const { onSelectChange } = this.props;
    const { errors } = this.state;

    const error = getCurrentError(_.slugify(title), errors);
    this.setState({
      currentError: error,
      selectedOption: { title, id },
      listOpen: false
    });
    onSelectChange(_.slugify(title), error);
  }

  render() {
    const { id, options, label, placeholder } = this.props;

    const {
      hasBlurred,
      isVirgin,
      currentError,
      errors,
      selectedOption,
      listOpen
    } = this.state;
    const showError = hasBlurred && !isVirgin && currentError ? true : false;

    return (
      <div className={styles.select} onBlur={this.handleBlur} tabIndex={-1}>
        <Label id={id} label={label} />
        <div className={styles.wrapper}>
          <div
            className={`${styles.header} ${showError ? styles.error : ''}`}
            onClick={this.toggleList}
          >
            <div className={styles['header-title']}>
              {selectedOption.title || placeholder}
            </div>
            <div
              className={`${
                listOpen ? styles['chevron-up'] : styles['chevron-down']
              } ${styles.chevron}`}
            />
          </div>
          {listOpen && (
            <ul className={styles.list}>
              {options.map(item => (
                <Option
                  item={item}
                  key={item.id}
                  selectItem={this.handleChange}
                />
              ))}
            </ul>
          )}
        </div>
        {showError && (
          <InputError errors={errors} currentError={currentError} />
        )}
      </div>
    );
  }
}

Select.displayName = 'Select';
Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ),
  extraErrors: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      message: PropTypes.string,
      isError: PropTypes.func
    })
  ),
  onSelectChange: PropTypes.func
};

Select.defaultProps = {
  isRequired: true,
  extraErrors: []
};

export default Select;
