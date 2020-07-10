import React, { Component } from "react";

export default class TodoListItemAddForm extends Component {
  render() {
    const {onAdded} = this.props;

    return (
      <button onClick={onAdded}>
        Add
      </button>
    );
  }
}