import React from 'react';
import PropTypes from 'prop-types';
import styles from '../autosuggest.module.scss';

const DefaultImage = ({ initial }) => {
  return <div className={styles['default-image']}>{initial}</div>;
};

DefaultImage.displayName = 'DefaultImage';
DefaultImage.propTypes = {
  initial: PropTypes.string
};

export default DefaultImage;
