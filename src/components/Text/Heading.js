import React from 'react';
import styles from './text.module.scss';
import PropTypes from 'prop-types';

const Heading = ({
  level = 2,
  weight = 'bold',
  children = '',
  className = '',
  color = 'black'
}) => {
  const Element = `h${level}`;

  return (
    <Element
      className={`${styles[`heading-${level}`]} ${styles[weight]} ${
        styles[color]
      } ${className}`}
    >
      {children}
    </Element>
  );
};

Heading.displayName = 'Heading';
Heading.propsTypes = {
  level: PropTypes.number && PropTypes.oneOf([1, 2, 3, 4, 5]),
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

export default Heading;
