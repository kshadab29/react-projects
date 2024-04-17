import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-store";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems />
        <WelcomeMessage />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
