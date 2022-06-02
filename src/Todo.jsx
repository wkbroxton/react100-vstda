import React from "react";

export default (props) => (
  <li className={`list-group-item ${props.Todo.color}`}>
    <div className="spots well">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
        onChange={(e) => props.handleCheck(e, props.i)}
      />
      <span className={props.Todo.strikeThrough ? "line-through" : "none"}>
        {props.Todo.newTodo}
      </span>
      <a
        onClick={() => {
          props.ViewTodo(props.i);
        }}
        className="edit-todo edit-button"
      >
        <img src="https://i.imgur.com/8Ox11Wz.png" />
      </a>
      <a
        onClick={() => {
          props.removeTodo(props.i);
        }}
        className="delete-todo delete-button"
      >
        <img src="https://i.imgur.com/XR8a1XZ.png" />
      </a>
    </div>
  </li>
);
