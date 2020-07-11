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
        <button onClick={onDeleted}>Del</button>
        <button className="btn-important" onClick={onToggleImportant}>!</button>
      </div>
    </li>
  );
}

export default TodoListItem;