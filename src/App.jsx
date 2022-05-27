import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      priority: "0",
      color: "",
      editEnabled: false,
      allTodos: [],
      viewTodos: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    const newTodo = this.state.newTodo;
    const priority = this.state.priority;
    const editEnabled = this.state.editEnabled;

    let color =
      priority == "1"
        ? "list-group-item-success"
        : priority == "2"
        ? "list-group-item-warning"
        : "list-group-item-danger";

    const todo = {
      newTodo: newTodo,
      priority: priority,
      color: color,
      editEnabled: editEnabled,
      viewTodos: true,
    };
    let newArr = this.state.allTodos.concat(todo);
    this.setState({ allTodos: newArr, newTodo: "", priority: 0, color: "" });
  }

  render() {
    return (
      <div className="container main-thing">
        <div className="title">
          <h1 id="heading">Very Simple To Do App</h1>
          <h4>
            Track <i>all</i> of the things
          </h4>
          <hr />
        </div>

        <div className="row">
          <div className="container col-4" id="addToDo">
            <h4>I want to...</h4>
            <textarea
              cols="30"
              rows="10"
              name="newTodo"
              className="create-todo-text"
              onChange={this.onChange}
              value={this.state.newTodo}
            ></textarea>
            <h5>How much of a priority is this?</h5>
            <select
              className="create-todo-priority"
              name="priority"
              onChange={this.onChange}
              value={this.state.priority}
            >
              <option selected disabled>
                Select a Priority
              </option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
            <button onClick={() => this.handleClick()}>Save</button>
          </div>

          <div className="container col-8" id="todo-list">
            <div id="welcome-phrase-div">
              <h4>ToDo Items</h4>
              <h5 id="welcome-phrase">Welcome to Very Simple Todo App!</h5>
              <h5>Get started now by adding a new todo on the left.</h5>
            </div>

            <hr />

            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                First checkbox
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Second checkbox
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Third checkbox
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Fourth checkbox
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                Fifth checkbox
              </li>
            </ul>

            <hr />
            <div className="list-group ">
              <a
                href="#"
                className="list-group-item list-group-item-action view"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple default list group item
              </a>

              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-primary"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple primary list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-secondary"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple secondary list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-success"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple success list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-danger"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple danger list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-warning"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple warning list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-info"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple info list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-light"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple light list group item
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action list-group-item-dark"
              >
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
                A simple dark list group item
              </a>
            </div>
            <p id="todo-list">{this.state.allTodos.newTodo}</p>
          </div>
        </div>
      </div>
    );
  }
}
