import React, { Component } from 'react';
import TodoList from './TodoList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'First item',
          completed: true,
        },
        {
          id: 2,
          title: 'Second item',
          completed: false,
        },
        {
          id: 3,
          title: 'Third item',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList item={todos} />
      </div>
    );
  }
}

export default TodoContainer;
