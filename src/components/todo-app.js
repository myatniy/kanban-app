import React, { Component } from "react";
import "./css/todo-app.css";
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

  addTodoListItem = (todoListItemValue) => {
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

  changeBooleanValue = (booleanValue) => booleanValue ? false : true;

  togglePropertyHelper = (arr, idOfArrElement, propOfArr) => {
    const indexOfArr = arr.findIndex(el => el.id === idOfArrElement);
    const itemOfArr = arr[indexOfArr];

    return [
      ...arr.slice(0, indexOfArr),
      {...itemOfArr, [propOfArr]: !itemOfArr[propOfArr]},
      ...arr.slice(indexOfArr + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.togglePropertyHelper(todoData, id, "important")
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.togglePropertyHelper(todoData, id, "done")
      };
    });
  }

  render() {
    const {todoData} = this.state;
    const doneQuantity = (todoData.filter((el) => el.done)).length;

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
          todoQuantity={todoData.length - doneQuantity}
          doneQuantity={doneQuantity}
        />
        <TodoList
          todoData={todoData} 
          onDeleted={this.deleteTodoListItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}