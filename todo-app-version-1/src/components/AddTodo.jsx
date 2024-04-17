import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const itemNameElement = useRef();
  const itemDueDateElement = useRef();

  let handleAddButtonClicked = () => {
    const itemName = itemNameElement.current.value;
    const itemDueDate = itemDueDateElement.current.value;
    itemNameElement.current.value = "";
    itemDueDateElement.current.value = "";
    addNewItem(itemName, itemDueDate);
  };

  return (
    <div className="container text-center mt-4">
      <div className="row">
        <div className="col-5">
          <input
            ref={itemNameElement}
            type="text"
            placeholder="Enter Your TODO"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={itemDueDateElement} />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
