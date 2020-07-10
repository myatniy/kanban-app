import React, { Component } from "react";
import "./todo-app.css";
import TodoList from "./todo-list";
import ItemStatusFilter from "./item-status-filter";
import {uuid} from "uuidv4";

export default class TodoApp extends Component {
  state = {
    todoData: [
      {id: uuid(), value: "Build"},
      {id: uuid(), value: "App"}
    ]
  };

  deleteTodoListItem = (id) => {
    this.setState(({todoData}) => {
      const todoDataIndexOfArr = todoData.findIndex((el) => el.id === id);
      const todoDataWithoutDeletedElement = [
        ...todoData.slice(0, todoDataIndexOfArr),
        ...todoData.slice(todoDataIndexOfArr + 1)
      ];

      return {
        todoData: todoDataWithoutDeletedElement
      };
    });
  };

  render() {
    return (
      <div className="flex-container">
        <h1>Todo</h1>
        <div className="filter-notes-container">
          <input placeholder="search" />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todoData={this.state.todoData} 
          onDeleted={this.deleteTodoListItem}
        />
      </div>
    );
  }
}