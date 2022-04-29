import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  handleSubmit = (ev) => {
    const { title } = this.state;
    ev.preventDefault();
    console.log(title);
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
