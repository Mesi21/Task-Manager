import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  title, id, y, clickHandler,
}) => (
  <li key={id}>
    <input
      type="checkbox"
      checked={y}
      onChange={() => clickHandler({ id })}
    />
    { title }
  </li>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  y: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Task;
