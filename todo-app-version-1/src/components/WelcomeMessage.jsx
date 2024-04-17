import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

export default function WelcomeMessage() {
  const {todoItems} = useContext(TodoItemsContext)
  return todoItems.length === 0 && <h3>Nothing to do! Enjoy Your Day</h3>;
}
