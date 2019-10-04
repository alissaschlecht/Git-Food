import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';

const Image = ({ className = '', src, alt = '' }) => {
  return <Img className={className} src={src} alt={alt} />;
};

Image.displayName = 'Image';
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.any
};

export default Image;