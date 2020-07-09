import React from "react";
import "./todo-list.css";
import TodoListItem from "./todo-list-item";

const TodoList = ({todoData, onDeleted}) => {
  const todoDataElements = todoData.map(({id, value}) =>
    <TodoListItem 
      key={id} 
      value={value}
      onDeleted={() => onDeleted(id)}
    />
  );

  return (
    <ul>
      {todoDataElements}
    </ul>
  );
}

export default TodoList;