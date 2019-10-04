import React from 'react';
import PropTypes from 'prop-types';
import styles from './text.module.scss';

const Body = ({
  size = 'regular',
  weight = 'regular',
  children = '',
  className = '',
  color = 'black'
}) => (
  <div
    className={`${styles[`body-${size}`]} ${styles[weight]} ${className} ${
      styles[color]
    }`}
  >
    {children}
  </div>
);

Body.displayName = 'Body';
Body.propsTypes = {
  size: PropTypes.oneOf(['tiny', 'small', 'regular', 'large']),
  weight: PropTypes.oneOf(['light', 'regular', 'semi-bold', 'bold']),
  children: PropTypes.Node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'black',
    'white',
    'lightGrey',
    'mediumGrey',
    'darkestGrey'
  ])
};

export default Body;
