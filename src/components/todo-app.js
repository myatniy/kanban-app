import React, { Component } from "react";
import "./todo-app.css";
import TodoListStatistics from "./todo-list-statistics";
import TodoList from "./todo-list";
import ItemStatusFilter from "./item-status-filter";
import TodoListItemAddForm from "./todo-list-item-add-form";
import {uuid} from "uuidv4";

export default class TodoApp extends Component {
  state = {
    todoData: [
      {id: uuid(), value: "Build", important: false, done: false},
      {id: uuid(), value: "App", important: false, done: false},
      {id: uuid(), value: "Important", important: true, done: false},
      {id: uuid(), value: "Done", important: false, done: true}
    ]
  };

  createTodoListItem = (todoListItemValue) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.concat({
          id: uuid(),
          value: todoListItemValue,
          important: false,
          done: false
        })
      };
    });
  }

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
  }

  addTodoListItem = () => {
    this.createTodoListItem("New")
  }

  changeBooleanValue = (booleanValue) => booleanValue ? false : true;

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      const todoDataIndexOfArr = todoData.findIndex((el) => el.id === id);
      const todoDataItem = todoData[todoDataIndexOfArr];
      todoDataItem.important = !todoDataItem.important;

      return {
        todoData: [
          ...todoData.slice(0, todoDataIndexOfArr),
          todoDataItem,
          ...todoData.slice(todoDataIndexOfArr + 1)
        ]
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const todoDataIndexOfArr = todoData.findIndex((el) => el.id === id);
      const todoDataItem = todoData[todoDataIndexOfArr];
      todoDataItem.done = !todoDataItem.done;

      return {
        todoData: [
          ...todoData.slice(0, todoDataIndexOfArr),
          todoDataItem,
          ...todoData.slice(todoDataIndexOfArr + 1)
        ]
      };
    });
  }

  render() {
    return (
      <div className="flex-container">
        <h1>Todo</h1>
        <div className="filter-notes-container">
          <input placeholder="search" />
          <ItemStatusFilter />
        </div>
        <TodoListItemAddForm
          onAdded={this.addTodoListItem}
        />
        <TodoListStatistics
          todoQuantity={2}
          doneQuantity={1}
        />
        <TodoList
          todoData={this.state.todoData} 
          onDeleted={this.deleteTodoListItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}