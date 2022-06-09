import React from "react";

export default (props) => (            
  <div>
  {props.Todo.editEnabled ? (
    <div className="row">
    <div className="container col-4" id="addToDo">
      <h4 id="update">Let's Modify our Task...</h4>
      <textarea
        cols="30"
        rows="10"
        name="newTodo"
        className="update-todo-text"
        value={props.Todo.newTodo}
        onChange={(e) => props.saveChange(e, props.i)}
      ></textarea>
      <h5>How much of a priority is this?</h5>
      <select
        className="update-todo-priority"
        name="priority"
        value={props.Todo.priority}
        onChange={(e) => props.saveChange(e, props.i)}
      >
        <option selected disabled>
          Select a Priority
        </option>
        <option value="1">Low</option>
        <option value="2">Medium</option>
        <option value="3">High</option>
      </select>
      <button className="update-todo" onClick={() => props.viewTodo()}>
        Save
      </button>
    </div>
    </div>
) : (
  <li className={`list-group-item ${props.Todo.color}`}>
  <div className="spots well">
    <div className="td-left">
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
    </div>
    <div className="td-right">
    <a
      onClick={() => {
        props.viewTodo(props.i);
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

  </div>
</li>
)}
</div>
);
