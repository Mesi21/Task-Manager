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
      title: ev.target.value,
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form>
        <input type="text" placeholder="Add Todo..." value={title} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
