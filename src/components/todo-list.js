import React from "react";
import "./todo-list.css";
import TodoListItem from "./todo-list-item";

const TodoList = ({todoData}) => {
  const todoDataElements = todoData.map((item) => 
    // <TodoListItem value={item.value} isImportant={item.isImportant} />
    // <TodoListItem key={item.id} {...item} />
    <TodoListItem 
      key={item.id} 
      value={item.value} 
      isImportant={item.isImportant} 
    />
  );

  return (
    <ul>
      {todoDataElements}
    </ul>
  );
}

export default TodoList;