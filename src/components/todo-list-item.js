import React from "react";
import "./css/todo-list-item.css";

const TodoListItem = ({ value, important, done, onDeleted, onToggleImportant, onToggleDone }) => {
  let listItemParentClassName = important ? ["li-style", "important"] : ["li-style"];
  let listItemValueClassName = done ? ["li-value", "crossed-out"] : ["li-value"];

  return (
    <li className={listItemParentClassName.join(" ")}>
      <span
        className={listItemValueClassName.join(" ")}
        onClick={onToggleDone}
      >
        {value}
      </span>
      <div className="btn-container">
        <button className={`btn-todo-list-item`} onClick={onDeleted}>x</button>
        <button className={`btn-todo-list-item btn-important`} onClick={onToggleImportant}>!</button>
      </div>
    </li>
  );
}

export default TodoListItem;