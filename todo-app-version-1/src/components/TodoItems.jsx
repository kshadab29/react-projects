import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
export default function () {

  const {todoItems} = useContext(TodoItemsContext)
  
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoItem={item.name} todoDate={item.date}></TodoItem>
      ))}
    </div>
  );
};
