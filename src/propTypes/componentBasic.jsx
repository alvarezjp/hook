import React from 'react';
import PropTypes from 'prop-types';

const ComponentBasic = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

ComponentBasic.propTypes = {
  title: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ComponentBasic;
