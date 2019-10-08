import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Img from 'react-image';

import Label from './components/label.js';
import hostname from '../../utils/hostname.js';
import DefaultImage from './components/default-image.js';
import styles from './autosuggest.module.scss';

class AutosuggestInput extends Component {
  constructor(props) {
    super(props);

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionInputChange = this.onSuggestionInputChange.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.onSuggestionInputBlur = this.onSuggestionInputBlur.bind(this);

    const { selected } = props;

    this.state = {
      value: selected ? selected.name : '',
      current: selected || {},
      suggestions: []
    };
  }

  getSuggestions(value) {
    const suggestions = this.props.suggestions;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength
      ? suggestions.filter(
          suggestion =>
            suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
        )
      : [];
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return (
      <div>
        {this.props.isSubscription &&
          suggestion.companyUrl && (
            <Img
              className={styles.image}
              src={`//logo.clearbit.com/${hostname(suggestion.companyUrl)}`}
              alt={suggestion.name}
              unloader={
                <DefaultImage
                  initial={(suggestion.name || '').toUpperCase()[0]}
                />
              }
            />
          )}
        <span>{suggestion.name}</span>
      </div>
    );
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionInputChange(event, { newValue }, callback) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionInputBlur(event, suggestion) {
    const { value, current } = this.state;
    const { onChangeCallback } = this.props;

    if (value && current && current.name !== value) {
      return onChangeCallback({ name: value });
    } else {
      return onChangeCallback(current);
    }
  }

  onSuggestionSelected(event, { suggestion }) {
    this.setState({
      current: suggestion
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { suggestions, value } = this.state;
    const { label, placeholder } = this.props;

    const inputProps = {
      placeholder: placeholder,
      value: value,
      onChange: this.onSuggestionInputChange,
      onBlur: this.onSuggestionInputBlur
    };

    return (
      <Fragment>
        <Label label={label} />
        <Autosuggest
          highlightFirstSuggestion={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
          theme={styles}
        />
      </Fragment>
    );
  }
}

AutosuggestInput.displayName = 'Autosuggest';
AutosuggestInput.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string
    })
  ),
  onChangeCallback: PropTypes.func
};

export default AutosuggestInput;
