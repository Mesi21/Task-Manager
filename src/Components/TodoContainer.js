import React, { Component } from 'react';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello Todos</h1>
        <p>I am in the Container Component</p>
      </div>
    );
  }
}

export default TodoContainer;
