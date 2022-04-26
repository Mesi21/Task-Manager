import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ item }) => (
  <div>
    <ul>
      {item.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  </div>
);

TodoList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default TodoList;
