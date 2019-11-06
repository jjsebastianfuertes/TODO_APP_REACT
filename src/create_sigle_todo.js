import React from "react";
import "./styles.css";

const Todo = props => {
  return (
    <li className="container-item-lista">
      <p className="text-todo">{props.todo.text}</p>
      <input
        className="input-checkbox"
        type="checkbox"
        onChange={props.isChecked}
      />
      <button className="button-delete" onClick={props.removeTodo}>
        delete
      </button>
    </li>
  );
};

export default Todo;
