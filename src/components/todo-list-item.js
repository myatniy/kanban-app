import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({value, isImportant}) => {
  const applyIsImportant = (isImportant) => isImportant ? "important" : null;

  return (
    <li 
      // key={id}
      className={`li-style ${applyIsImportant(isImportant)}`}
    >
      <span className="li-value">{value}</span>
      <div className="btn-container">
        <button>Del</button>
        <button>!</button>
      </div>
    </li>
  );
}

export default TodoListItem;