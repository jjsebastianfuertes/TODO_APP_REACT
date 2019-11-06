import React from "react";

const Todo = props => {
  return (
    <li>
      <p>{props.todo.text}</p>
      <input type="checkbox" onChange={props.isChecked} />
      <button onClick={props.removeTodo}>delete</button>
    </li>
  );
};

export default Todo;
