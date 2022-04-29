import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TodoList = ({ item, clickHandler, remove }) => (
  <div>
    <ul>
      {
        item
          .map((todo) => (
            <Task
              key={todo.id}
              title={todo.title}
              id={todo.id}
              y={todo.completed}
              clickHandler={clickHandler}
              remove={remove}
            />
          ))
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
  clickHandler: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TodoList;
