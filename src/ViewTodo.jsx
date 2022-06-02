import React from "react";

export default (props) => (
  <li className={`list-group-item ${props.Todo.color}`}>
    <div className="spots well">
      <div id="td-left">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        <input>{props.Todo.newTodo}</input>
      </div>
      <div id="td-right">
        <a className="edit-todo edit-button">
          <img src="https://i.imgur.com/8Ox11Wz.png" />
        </a>
        <a className="delete-todo delete-button">
          <img src="https://i.imgur.com/XR8a1XZ.png" />
        </a>
      </div>
    </div>
  </li>
);
