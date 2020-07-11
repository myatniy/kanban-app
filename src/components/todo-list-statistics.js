import React, { Component } from "react";
import "./css/todo-list-statistics.css";

export default class TodoListStatistics extends Component {

  render() {
    const {todoQuantity, doneQuantity} = this.props;

    return(
      <p className="statistics">{todoQuantity} more to do, {doneQuantity} done</p>
    );
  }
}