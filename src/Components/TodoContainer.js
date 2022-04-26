import React, { Component } from 'react';

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
        <h1>Hello Todos</h1>
        <p>I am in the Container Component</p>
        <ul>
          {todos.map((todo) => {
            const { title, id } = todo;
            return <li key={id}>{title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
