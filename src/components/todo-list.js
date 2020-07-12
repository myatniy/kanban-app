import React from "react";
import "./css/todo-list.css";
import TodoListItem from "./todo-list-item";

const TodoList = ({todoData, onDeleted, onToggleImportant, onToggleDone}) => {
  const todoDataElements = todoData.map(({id, value, important, done}) =>
    <TodoListItem 
      key={id} 
      value={value}
      important={important}
      done={done}
      onDeleted={() => onDeleted(id)}
      onToggleImportant={() => onToggleImportant(id)}
      onToggleDone={() => onToggleDone(id)}
    />
  );

  return (
    <ul className="todo-list-container">
      {todoDataElements}
    </ul>
  );
}

export default TodoList;