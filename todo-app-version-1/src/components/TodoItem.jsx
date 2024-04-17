import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

export default function ({todoDate, todoItem}) {

  const {deleteItem} = useContext(TodoItemsContext);

  return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="col-5">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-3">
          <button type="button" className="btn btn-danger" onClick={()=>deleteItem(todoItem)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
