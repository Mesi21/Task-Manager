import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TodoList = ({ item }) => (
  <div>
    <ul>
      {
        item
          .map((todo) => <Task key={todo.id} title={todo.title} id={todo.id} y={todo.completed} />)
      }
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
