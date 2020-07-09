import React from "react";
import "./todo-app.css";
import TodoList from "./todo-list";
import ItemStatusFilter from "./item-status-filter";
import {uuid} from "uuidv4";

const TodoApp = () => {
  const todoData = [
    {id: uuid(), value: "Build"},
    {id: uuid(), value: "App"}
  ]

  return (
    <div className="flex-container">
      <h1>Todo</h1>
      <div className="filter-notes-container">
        <input placeholder="search" />
        <ItemStatusFilter />
      </div>
      <TodoList todoData={todoData} />
    </div>
  );
}

export default TodoApp;