import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './components/label.js';
import InputError from './components/input-error.js';
import styles from './input.module.scss';
import localized from '../../utils/localized.js';
import unchecked from '../../img/checkbox-empty.png';
import checked from '../../img/checkbox-filled.png';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVirgin: true
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { reset, forceValidation } = props;

    if (reset) {
      return {
        ...state,
        isVirgin: true
      };
    }

    if (forceValidation) {
      return {
        ...state,
        isVirgin: false
      };
    }

    return state;
  }

  handleCheckboxChange() {
    const { isRequired, value, onCheckboxChange } = this.props;

    this.setState({
      isVirgin: false
    });

    onCheckboxChange(!value, isRequired ? value : false);
  }

  render() {
    const {
      id,
      label,
      color,
      value,
      className,
      isRequired,
      errorMessage
    } = this.props;
    const { isVirgin } = this.state;
    const showError = !isVirgin && isRequired && !value;

    return (
      <div
        id={id}
        className={`${styles['checkbox']} ${className ? className : ''}`}
        onClick={this.handleCheckboxChange}
      >
        <img
          src={value ? checked : unchecked}
          className={styles.image}
          alt=""
        />
        <Label id={id} label={label} color={color} />
        {showError && (
          <InputError
            errors={[
              {
                key: 'check-mandatory',
                message: errorMessage
              }
            ]}
            currentError={'check-mandatory'}
          />
        )}
      </div>
    );
  }
}

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  value: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  forceValidation: PropTypes.bool,
  reset: PropTypes.bool,
  errorMessage: PropTypes.string,
  color: PropTypes.oneOf(['black', 'white'])
};

Checkbox.defaultProps = {
  forceValidation: false,
  isDisabled: false,
  isRequired: true,
  reset: false,
  errorMessage: localized.strings.common.required,
  color: 'black'
};

export default Checkbox;
