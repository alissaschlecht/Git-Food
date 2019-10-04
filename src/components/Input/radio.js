import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './components/label.js';
import InputError from './components/input-error.js';
import styles from './input.module.scss';
import localized from '../../utils/localized.js';
import unfilled from '../../img/radio-unfilled.png';
import filled from '../../img/radio-filled.png';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVirgin: true
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const { reset, forceValidation } = this.props;

      if (reset) {
        this.setState({
          isVirgin: true
        });
      }

      if (forceValidation) {
        this.setState({
          isVirgin: false
        });
      }
    }
  }

  handleRadioChange() {
    const { isRequired, value, onRadioChange } = this.props;

    this.setState({
      isVirgin: false
    });

    onRadioChange(!value, isRequired ? value : false);
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
        onClick={this.handleRadioChange}
      >
        <img src={value ? filled : unfilled} className={styles.image} alt="" />
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

Radio.displayName = 'Radio';
Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  value: PropTypes.bool.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  forceValidation: PropTypes.bool,
  reset: PropTypes.bool,
  errorMessage: PropTypes.string,
  color: PropTypes.oneOf(['black', 'white'])
};

Radio.defaultProps = {
  forceValidation: false,
  isDisabled: false,
  isRequired: true,
  reset: false,
  errorMessage: localized.strings.common.required,
  color: 'black'
};

export default Radio;
