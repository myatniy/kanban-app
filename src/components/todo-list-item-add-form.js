import React, { Component } from "react";

export default class TodoListItemAddForm extends Component {
  state = {
    todoListItemValue: ""
  }

  onTextChanged = (e) => {
    this.setState({
      todoListItemValue: e.target.value
    });
  }

  onTextSubmitted = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.todoListItemValue);
    this.setState({
      todoListItemValue: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onTextSubmitted}>
        <input
          type="text"
          placeholder="new note"
          value={this.state.todoListItemValue}
          onChange={this.onTextChanged}
        />
        <button>Add</button>
      </form>
    );
  }
}