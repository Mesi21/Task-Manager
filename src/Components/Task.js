import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, id, y }) => (
  <li key={id}>
    { title }
    {' '}
    { y }
  </li>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  y: PropTypes.bool.isRequired,
};

export default Task;
