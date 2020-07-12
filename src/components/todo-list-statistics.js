import React, { Component } from "react";
import "./css/todo-list-statistics.css";

export default class TodoListStatistics extends Component {

  render() {
    const {todoQuantity, doneQuantity} = this.props;

    return(
      <div className="statistics-container">
        <span className="digit">{todoQuantity} active</span>
        <span className="digit">{doneQuantity} completed</span>
      </div>
    );
  }
}