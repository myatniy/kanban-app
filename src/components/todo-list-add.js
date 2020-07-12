import React, { Component } from "react";
import "./css/todo-list-add.css";

export default class TodoListAdd extends Component {
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
    if (this.state.todoListItemValue) this.props.onAdded(this.state.todoListItemValue);
    this.setState({
      todoListItemValue: ""
    });
  }

  render() {
    return (
      <form
        className="add-item-container"
        onSubmit={this.onTextSubmitted}
      >
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