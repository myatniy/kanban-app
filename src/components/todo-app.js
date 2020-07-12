import React, { Component } from "react";
import "./css/todo-app.css";
import TodoListStatistics from "./todo-list-statistics";
import TodoList from "./todo-list";
import TodoListFilter from "./todo-list-filter";
import TodoListAdd from "./todo-list-add";
import TodoListSearch from "./todo-list-search";
import {uuid} from "uuidv4";

export default class TodoApp extends Component {
  state = {
    todoData: [
      {id: uuid(), value: "Build", important: false, done: false},
      {id: uuid(), value: "App", important: false, done: false},
      {id: uuid(), value: "Important", important: true, done: false},
      {id: uuid(), value: "Done", important: false, done: true}
    ],
    searchQuery: "",
    filterQuery: "" // all, active, done
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

  search = (arr, searchQuery) => {
    if (arr.length === 0) return arr;

    return arr.filter(
      arrItem => arrItem
        .value
        .toLowerCase()
        .indexOf(searchQuery) > -1
    );
  }

  onSearchResultChanged = (searchQuery) => {
    this.setState({searchQuery});
  }

  filter = (arr, filterQuery) => {
    switch (filterQuery) {
      case "active": return arr.filter(item => !item.done);
      case "done": return arr.filter(item => item.done);
      default: return arr;
    }
  }

  render() {
    const {todoData, searchQuery, filterQuery} = this.state;
    const doneQuantity = (todoData.filter((el) => el.done)).length;
    const searchResult = this.filter(
      this.search(todoData, searchQuery), filterQuery
    );

    return (
      <div className="flex-container">
        <h1>Todo</h1>
        <div className="filter-notes-container">
          <TodoListSearch onSearchResultChanged={this.onSearchResultChanged} />
          <TodoListFilter />
        </div>
        <TodoListAdd
          onAdded={this.addTodoListItem}
        />
        <TodoListStatistics
          todoQuantity={todoData.length - doneQuantity}
          doneQuantity={doneQuantity}
        />
        <TodoList
          todoData={searchResult}
          onDeleted={this.deleteTodoListItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}