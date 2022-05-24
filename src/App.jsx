import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      priority: 0,
      editEnabled: true,
      showTodoList: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(e) {
    const newTodo = e.target.newTodo;
    this.setState({ [newTodo]: value });
  }

  handleClick(e) {
    const newTodo = this.state.newTodo;
    const priority = this.state.priority;
    const editEnabled = this.state.editEnabled;

    this.setState({
      newTodo: newTodo,
      priority: priority,
      editEnabled: editEnabled,
      showTodoList: true,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1 id="heading">Very Simple To Do App</h1>
          <h4>Track all of the things</h4>
          <hr />
        </div>
        <div className="container" id="addToDo">
          <h4>I want to...</h4>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="create-todo-text"
          ></textarea>
          <h4>How much of a priority is this?</h4>
          <select name="" id="">
            <option values="0" defaultValue={"default"} disabled>
              Select a Priority
            </option>
            <option values="1">Low</option>
            <option values="3">Medium</option>
            <option values="3">High</option>
          </select>
          <button>Save</button>
        </div>
        <div className="container" id="todo-list">
          <div>
            <ListGroup>
              <ListGroupItem bsStyle="success">Success</ListGroupItem>
              <ListGroupItem bsStyle="warning">Warning</ListGroupItem>
              <ListGroupItem bsStyle="danger">Danger</ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}
